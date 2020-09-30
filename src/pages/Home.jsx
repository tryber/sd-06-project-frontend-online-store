import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.onClickSearch = this.onClickSearch.bind(this);

    this.state = {
      products: [],
    };
  }

  async onClickSearch(event) {
    const products = await api.getProductsFromCategoryAndQuery(event, event);

    this.setState({
      products: products.results,
    });
  }

  render() {
    return (
      <div>
        <SearchBar onClickSearch={this.onClickSearch} />
        <div>
          <ProductList products={this.state.products} />
        </div>
      </div >
    );
  }
}
