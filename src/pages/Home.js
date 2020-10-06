import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    this.state = {
      searchInput: '',
      spanMessage: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      searchedItems: undefined,
      selectedCategory: '',
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
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
    const { searchedItems, spanMessage, searchInput } = this.state;

    const { addToCart } = this.props;

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
                addTocart={ addToCart }
                key={ item.id }
                item={ item }
                query={ searchInput }
              />
            ))}
        </div>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to={ { pathname: '/cart' } }
          >
            <img src={ addCart } alt="button car shopping" />
          </Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
