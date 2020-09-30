import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
