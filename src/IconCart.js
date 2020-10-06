import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './IconCart.css';

function IconCart(quantity) {
  return (
    <div class="icon-cart-container">
      <FaShoppingCart />
      <p data-testid="shopping-cart-size">{quantity}</p>
    </div>
  );
}

export default IconCart;
