import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div id="cart-button">
      <button type="button"><Link data-testid="shopping-cart-button" to="/cart">Ir para o Carrinho de Compras</Link></button>
    </div>
  );
};
