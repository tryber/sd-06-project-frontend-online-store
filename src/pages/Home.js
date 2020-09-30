import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addCart from '../addCart.svg';
import './style/home.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchedItems from '../components/SearchedItems';
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
    this.setState({ selectedCategory: id });
  }

  fetchSearchedItem() {
    this.setState(
      async () => {
        const { searchInput, selectedCategory: ID } = this.state;

        const searchResult = await getProductsFromCategoryAndQuery(ID, searchInput);
        const retorno = await searchResult;
        if (searchResult.results.length >= 1) {
          console.log(retorno);
          return this.setState({
            searchedItems: searchResult.results,
            searchInput: '',
            spanMessage: '',
          });
        }

        return this.setState({
          searchedItems: undefined,
          spanMessage: 'Nenhum produto foi encontrado',
        });
      },
    );
  }

  render() {
    const { searchedItems, spanMessage } = this.state;

    return (
      <div>
        <CategoriesSideBar saveSelectedCategory={ this.saveSelectedCategory } />
        <div className="search-container">
          <input
            name="searchInput"
            className="search-input"
            type="text"
            data-testid="query-input"
            onChange={ this.onSearchTextChange }
          />

          <button
            data-testid="query-button"
            type="button"
            onClick={ this.fetchSearchedItem }
          >
            Search
          </button>

          {searchedItems === undefined
            ? <span data-testid="home-initial-message">{spanMessage}</span>
            : searchedItems.map((item) => (
              <SearchedItems key={ item.id } item={ item } />
            ))}
        </div>
        <div>
          <Link data-testid="shopping-cart-button" to="/Cart">
            <img src={ addCart } alt="button car shopping" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
