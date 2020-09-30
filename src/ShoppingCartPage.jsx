import React from 'react';
// import { Link } from 'react-router-dom';

class ShoppingCartPage extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

export default ShoppingCartPage