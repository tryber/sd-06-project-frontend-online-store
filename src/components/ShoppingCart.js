import React from 'react';
import imgCart from '../img/imgCart.jpg';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <img src={ imgCart } alt="shopping-cart-button" />
      </div>
    );
  }
}

export default ShoppingCart;
