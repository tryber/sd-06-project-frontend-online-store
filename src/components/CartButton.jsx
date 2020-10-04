import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default () => {
  return (
    <div className="cart-button-container">
      <button id="cart-button" type="button"><Link data-testid="shopping-cart-button" to="/cart"><FaShoppingCart /></Link></button>
    </div>
  );
};
