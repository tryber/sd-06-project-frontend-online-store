import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function ButtonShoppingCart(productsOnCart) {
  return (
    <div>
      <Link
        to={ { pathname: '/cart', state: { productsOnCart } } }
        data-testid="shopping-cart-button"
      >
        <FaShoppingCart />
      </Link>
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}

export default ButtonShoppingCart;
