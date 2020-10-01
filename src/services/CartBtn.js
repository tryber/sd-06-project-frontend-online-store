import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../imgs/cart.png';
import '../App.css';

function CartBtn() {
  return (
    <div className="cartImg">
      <Link data-testid="shopping-cart-button" to="/EmptyCart">
        <img src={ cartImg } className="cartImg" alt="cart" />
      </Link>
    </div>
  );
}

export default CartBtn;
