import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to="/">
          <button type="button"> Voltar </button>
        </Link>
      </div>
    );
  }
}

export default Cart;
