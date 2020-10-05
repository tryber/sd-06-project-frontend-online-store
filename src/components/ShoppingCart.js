import React from 'react';
import EmptyBox from '../images/empty-box.png';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <img src={ EmptyBox } alt="empty-box" className="empty-box" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
