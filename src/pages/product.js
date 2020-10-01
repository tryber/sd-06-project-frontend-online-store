import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Product extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id, category } = match.params;
    this.searchApiProducts = this.searchApiProducts.bind(this);
    this.state = {
      product: [],
      id,
      category,
      // attributes: [],
    };
  }

  componentDidMount() {
    this.searchApiProducts();
  }

  async searchApiProducts() {
    const { category, id } = this.state;
    await api
      .getProductsFromCategoryAndQuery(category)
      .then((res) => res.results.filter((element) => element.id === id))
      .then((res) => {
        this.setState({
          product: res[0],
          // attributes: res[0].attributes,
        });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ product.title }</h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>
          R$:
          {product.price}
        </p>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf.isRequired,
};
