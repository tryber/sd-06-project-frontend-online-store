import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        </button>
      </div>
    );
  }
}

export default ShoppingCartButton;
