import React from 'react';
import { Link } from 'react-router-dom';
import IconCart from './IconCart';

function Header(qtyOnCart) {
  const cartMsg = 'Seu carrinho está vazio';
  const msgTestId = 'shopping-cart-empty-message';
  const cartBtnId = 'shopping-cart-button';
  return (
    <div>
      <Link to={ { pathname: '/cart' } } data-testid={ cartBtnId }>
        { IconCart(qtyOnCart) }
      </Link>
      { (qtyOnCart < 1) ? <p data-testid={ msgTestId }>{cartMsg}</p> : '' }
    </div>
  );
}

export default Header;
