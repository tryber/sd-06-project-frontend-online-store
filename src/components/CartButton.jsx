import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  
  return (
    <div>
      <button data-testid="shopping-cart-button"><Link to="/Cart">Ir para o Carrinho de Compras</Link></button>
    </div>
  );
};
