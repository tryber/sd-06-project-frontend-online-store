import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addCart from '../addCart.svg';
import './style/home.css';
import * as api from '../services/api';
import SearchedItems from '../components/SearchedItems';
import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';
import CategoriesSideBar from '../components/CategoriesSideBar';

class Home extends Component {
  constructor() {
    super();

    this.fetchSearchedItem = this.fetchSearchedItem.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.saveSelectedCategory = this.saveSelectedCategory.bind(this);
    this.addTocart = this.addTocart.bind(this);


    this.state = {
      searchInput: '',
      spanMessage: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      searchedItems: undefined,
      selectedCategory: '',
      productsAddToCart: {},
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addTocart(productName) {
    this.setState((currentState) => ({
      productsAddToCart: {
        ...currentState.productsAddToCart,
        [productName]: (currentState.productsAddToCart[productName] || 0) + 1,
      },
    }));
  }

  saveSelectedCategory(id) {
    this.setState({ selectedCategory: id }, () => {
      this.fetchSearchedItem();
    });
  }

  async fetchSearchedItem() {
    const { searchInput, selectedCategory: Id } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(Id, searchInput);
    console.log(searchResult);

    if (searchResult.results.length >= 1) {
      this.setState({
        searchedItems: searchResult.results,
        spanMessage: '',
      });
    } else {
      this.setState({
        searchedItems: undefined,
        spanMessage: 'Nenhum produto foi encontrado',
      });
    }
  }

  render() {
    const { searchedItems, spanMessage, searchInput, productsAddToCart } = this.state;

    return (
      <div className="home-page">
        <CategoriesSideBar saveSelectedCategory={ this.saveSelectedCategory } />

        <div className="items-display">

          <SearchInput onSearchTextChange={ this.onSearchTextChange } />

          <SearchButton fetchSearchedItem={ this.fetchSearchedItem } />


          {searchedItems === undefined
            ? <span data-testid="home-initial-message">{ spanMessage }</span>
            : searchedItems.map((item) => (
              <SearchedItems
                addTocart={ this.addTocart }
                key={ item.id }
                item={ item }
                query={ searchInput }
              />
            ))}
        </div>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to={ { pathname: '/cart', state: { data: productsAddToCart } } }
          >
            <img src={ addCart } alt="button car shopping" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
