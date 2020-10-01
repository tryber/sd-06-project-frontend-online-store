import React, { Component } from 'react';

import {
  SearchBar, ProductsList, CategoriesList, ShoppingCartButton,
} from '../components';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);

    this.state = {
      products: [],
    };
  }

  onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.getElementById('search-input');
    this.setState(async () => {
      const data = await getProductsFromCategoryAndQuery(value);
      const { results } = data;
      this.setState((prevState) => ({ products: [...results, ...prevState.products] }));
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div>
          <SearchBar onSearchTextSubmit={ this.onSearchTextSubmit } />
          <CategoriesList />
          <ShoppingCartButton />
        </div>

        <ProductsList products={ products } />

      </div>
    );
  }
}

export default Main;
