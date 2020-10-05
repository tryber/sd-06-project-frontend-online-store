import React, { Component } from 'react';

class ShoppingCartPage extends Component {
  constructor() {
    super();

    this.state = {
      cart: {}
    }
  }



  render() {
    const { state } = this.props.location;
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
        <div data-testid="shopping-cart-product-name">
          <p>{ state.title }</p>
        </div>
        <button data-testid="shopping-cart-button">Finalizar compra</button>
        <p data-testid="shopping-cart-product-quantity"></p>
      </div>
    );
  }
}

export default ShoppingCartPage;
