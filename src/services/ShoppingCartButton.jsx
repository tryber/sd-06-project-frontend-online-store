import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCartButton extends React.Component {
  render() {
    return (
      <section>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho de compras</Link>
      </section>
    )
  }

}

export default ShoppingCartButton;
