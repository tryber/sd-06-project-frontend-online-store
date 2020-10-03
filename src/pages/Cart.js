import React from 'react';
import { Link } from 'react-router-dom';
import returnArrow from '../images/return-arrow.png';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Cart;
