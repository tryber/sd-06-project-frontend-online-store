import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class CartButton extends React.Component {
  render() {
    const { cart } = this.props
    console.log(cart);
    return (
      <div className="cart-button-container">
        <button className="cart-button" type="button">
          <Link data-testid="shopping-cart-button" to="/cart">
            <FaShoppingCart />
          </Link>
          <h6>
            <div>{(cart) ? cart.totalQtd : 0}</div>
          </h6>
        </button>
      </div>
    );
  }
}

export default CartButton;
