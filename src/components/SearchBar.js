import React, { Component } from 'react';

import ProductsList from './ProductsList';
import ProductList from './productList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      isSearching: false,
      products: [],
    }
  }

  onSearchTextChange(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const { value } = searchInput;
    this.setState({ searchText: value, isSearching: true }, async () => {
      const data = await getProductsFromCategoryAndQuery(value);
      const results = data.results;
      this.setState({ products: [ ...results, ...this.state.products ] });
    });
  }

  render() {
    const { isSearching, products } = this.state
    let listOfProducts;

    (isSearching)
    ? listOfProducts = <ProductsList products={products} />
    : (
      listOfProducts = <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    return (
      <div>
        <form>
          <input id='search-input' data-testid="query-input" placeholder="Search..." />
          <button
            data-testid="query-button"
            onClick={this.onSearchTextChange}
          >
            Search
          </button>
        </form>
        
        {/* Não faria mais sentido se chamar CategoryList? */}
        <ProductList />
        {/*  */}

        {listOfProducts}
      </div>
    );
  }
}

export default SearchBar;
