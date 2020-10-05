import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default () => (
  <div className="cart-button-container">
    <button className="cart-button" type="button">
      <Link data-testid="shopping-cart-button" to="/cart">
        <FaShoppingCart /> 
      </Link>
      <h6>
        Visualizar
        <br />
        Carrinho
      </h6>
    </button>
  </div>
);
