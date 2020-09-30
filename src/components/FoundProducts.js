import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FoundProducts extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        Produto:
        {product.title}
      </div>
    );
  }
}

// add more fields here if you want
FoundProducts.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
