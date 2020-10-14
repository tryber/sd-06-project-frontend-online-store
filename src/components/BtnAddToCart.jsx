import React, { Component } from 'react';

export default class BtnAddToCart extends Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="product-add-to-cart"
        onClick={this.props.addToCart}
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}
