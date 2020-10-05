import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function IconCart(quantity) {
  return (
    <div>
      <FaShoppingCart />
      <p data-testid="shopping-cart-size">{quantity}</p>
    </div>
  );
}

export default IconCart;
