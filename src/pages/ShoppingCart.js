import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
      </div>
    );
  }
}

export default ShoppingCart;
