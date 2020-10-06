import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnAddToCart extends Component {
  constructor() {
    super();
    this.productOnLocalStorage = this.productOnLocalStorage.bind(this);
  }

  productOnLocalStorage() {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList') || '[]');
    const { product: { id, title, thumbnail, price } } = this.props;
    const quantity = 1;
    const myProductIndex = cartProducts.findIndex((item) => item.id === id);
    const num = 0;
    if (myProductIndex >= num) {
      cartProducts[myProductIndex].quantity += 1;
    } else {
      const ClickedProduct = { id, title, thumbnail, price, quantity };
      cartProducts.push(ClickedProduct);
    }
    localStorage.setItem('myCartList', JSON.stringify(cartProducts));
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.productOnLocalStorage }
        >
          Add Cart
        </button>
      </div>
    );
  }
}

BtnAddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
