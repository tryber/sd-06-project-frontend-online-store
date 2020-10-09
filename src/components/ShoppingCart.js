import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.png';
import { supplyQuantity } from '../services/CartSize';
import '../App.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <div className="cart-container">
          <img
            className="cart-img"
            src={ shoppingCart }
            height="50"
            alt="carrinho de compras"
          />
          <p
            className="cart-size"
            data-testid="shopping-cart-size"
          >
            {supplyQuantity()}
          </p>
        </div>
      </Link>
    );
  }
}

export default ShoppingCart;
