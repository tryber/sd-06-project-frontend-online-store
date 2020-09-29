import React from 'react';

function ButtonShoppingCart() {
  return (
    <div>
      <button type="button" data-testid="shopping-cart-button">Click</button>
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}

export default ButtonShoppingCart;
