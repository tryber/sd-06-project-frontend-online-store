import React from 'react';
import '../index.css';
import CartBtn from '../services/CartBtn';

function Cart() {
  return (
    <div className="container">
      <div className="searchField">
        <p
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      </div>
      <CartBtn />
    </div>
  );
}

export default Cart;
