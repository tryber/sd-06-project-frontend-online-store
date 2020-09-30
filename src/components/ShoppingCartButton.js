import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCartButton() {
  return (
    <div>
      <Link data-testid="shopping-cart-button" to="/Cart">
        <button type="button">Cart</button>
      </Link>
    </div>
  );
}

export default ShoppingCartButton;
