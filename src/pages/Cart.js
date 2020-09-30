import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        </div>
        <div>
          <Link to="/">Voltar para home</Link>
        </div>
      </div>
    );
  }
}

export default Cart;
