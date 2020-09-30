import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  
  return (
    <div>
      <button type="button"><Link data-testid="shopping-cart-button" to="/Cart">Ir para o Carrinho de Compras</Link></button>
    </div>
  );
};
