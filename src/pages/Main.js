import React, { Component } from 'react';

import {
  SearchBar, ProductsList, CategoriesList, ShoppingCartButton,
} from '../components';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);
    this.onCategoriesChange = this.onCategoriesChange.bind(this);

    this.state = {
      products: [],
    };
  }

  async onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.getElementById('search-input');
    const data = await getProductsFromCategoryAndQuery(value);
    const { results } = data;
    this.setState((prevState) => ({ products: [...results, ...prevState.products] }));
  }

  async onCategoriesChange({ target }) {
    const { value } = target;
    const data = await getProductsFromCategoryAndQuery('', value);
    const { results } = data;
    this.setState({ products: [...results] });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div>
          <SearchBar onSearchTextSubmit={ this.onSearchTextSubmit } />
          <CategoriesList
            onCategoriesChange={ this.onCategoriesChange }
          />
          <ShoppingCartButton />
        </div>

        <ProductsList products={ products } />

      </div>
    );
  }
}

export default Main;
