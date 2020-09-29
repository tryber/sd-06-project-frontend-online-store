import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartPage extends Component {
  
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Carrinho de compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default CartPage;
