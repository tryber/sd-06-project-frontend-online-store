import React, { Component } from 'react';

import {
  SearchBar, ProductsList, CategoriesList, ShoppingCartButton,
} from '../components';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);
    this.onCategoriesSelectChange = this.onCategoriesSelectChange.bind(this);

    this.state = {
      products: [],
      selectedCategory: '',
    };
  }

  async onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.getElementById('search-input');
    const data = await getProductsFromCategoryAndQuery(value);
    const { results } = data;
    this.setState((prevState) => ({ products: [...results, ...prevState.products] }));
  }

  async onCategoriesSelectChange({ target }) {
    const { value } = target;
    const data = await getProductsFromCategoryAndQuery('', value);
    console.log(data);
    const { results } = data;
    this.setState({
      products: [...results],
      selectedCategory: value,
    });
  }

  render() {
    const { products, selectedCategory } = this.state;

    return (
      <div>
        <div>
          <SearchBar onSearchTextSubmit={ this.onSearchTextSubmit } />
          <CategoriesList
            selectedCategory={ selectedCategory }
            onCategoriesSelectChange={ this.onCategoriesSelectChange }
          />
          <ShoppingCartButton />
        </div>

        <ProductsList products={ products } />

      </div>
    );
  }
}

export default Main;
