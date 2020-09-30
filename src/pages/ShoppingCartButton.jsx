import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {

  render() {
    return (
      <div>
        <Link to="./ShoppingCart">
          <button data-testid="shopping-cart-button">Botão-de-compras</button>
        </Link>
      </div>
    )
  }
}

export default ShoppingCartButton;