import React, { Component } from 'react';
import propTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <div data-testid="product">
          <h5>{ title }</h5>
          <img src={ thumbnail } alt="fotografia do produto" />
          <span>{`R$: ${price}`}</span>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
  }).isRequired,
};

export default Product;
