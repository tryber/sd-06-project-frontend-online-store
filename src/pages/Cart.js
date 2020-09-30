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

<<<<<<< HEAD
export default Cart;
=======
export default Cart;
>>>>>>> 6a451411820fb77b04bd00dcbbef77d604b0850b
