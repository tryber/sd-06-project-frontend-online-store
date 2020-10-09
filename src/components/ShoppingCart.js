import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCart from '../images/shopping-cart.png';
import { supplyQuantity } from '../services/CartSize';
import '../App.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.getcartSize = this.getcartSize.bind(this);
  }

  getcartSize() {
    const zero = 0;
    const { cartItems: items } = this.props;
    if (items) {
      return items.length;
    }
    return zero;
  }

  render() {
    const { cartItems: items } = this.props;
    return (
      <Link
        to={ {
          pathname: '/cart',
          cartItems: items,
        } }
        data-testid="shopping-cart-button"
      >
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

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
