import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from './services/api';

class ProductCard extends Component {

  async handleClickSearchButton() {
    const valueFromApi = await getProductsFromCategoryAndQuery();
    this.setState({ product: valueFromApi.results });
  }

  render() {
    return (
      <span>Hello Word</span>
    );
  }
}

export default ProductCard;
