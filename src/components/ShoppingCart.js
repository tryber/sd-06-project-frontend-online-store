import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCart from '../images/shopping-cart.png';
import '../App.css';

class ShoppingCart extends React.Component {
  render() {
    const { totalItems } = this.props;
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <div className="cart-container">
          <img
            className="cart-img"
            src={ shoppingCart }
            height="50"
            alt="carrinho de compras"
          />
          <p className="cart-size" data-testid="shopping-cart-size">{totalItems}</p>
        </div>
      </Link>
    );
  }
}

ShoppingCart.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default ShoppingCart;
