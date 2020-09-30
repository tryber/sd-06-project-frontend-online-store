import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
