import React from 'react';
import { Link } from 'react-router-dom';
import IconCart from './IconCart';

function ButtonShoppingCart(productsOnCart) {
  const cartMsg = 'Seu carrinho está vazio';
  const msgTestId = 'shopping-cart-empty-message';
  return (
    <div>
      <Link
        to={ { pathname: '/cart', state: { productsOnCart } } }
        data-testid="shopping-cart-button"
      >
        { IconCart(productsOnCart.length) }
      </Link>
      { (productsOnCart.length < 1) ? <p data-testid={ msgTestId }>{cartMsg}</p> : '' }
    </div>
  );
}

export default ButtonShoppingCart;
