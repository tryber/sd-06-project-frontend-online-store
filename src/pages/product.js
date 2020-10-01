import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class product extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id, category } = match.params;
    this.searchApiProducts = this.searchApiProducts.bind(this);
    this.state = {
      id,
      category,
      product: [],
      attributes:[]
    };
  }

  componentDidMount() {
    this.searchApiProducts();
  }

  async searchApiProducts() {
    const { category, id } = this.state;
    await api
      .getProductsFromCategoryAndQuery(category)
      .then((res) => {
        return res.results.filter((element) => element.id === id);
      })
      .then((res) => {
        this.setState({
          product: res[0],
          attributes: res[0].attributes,
        });
      });
  }

  render() {
    const { product, attributes } = this.state;
    console.log(product);
    return (
      <div>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <p>R$: {product.price}</p>
      </div>
    );
  }
}

product.propTypes = {
  match: PropTypes.objectOf.isRequired,
};
