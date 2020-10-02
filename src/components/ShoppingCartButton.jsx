import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCartButton extends React.Component {
  render() {
    const { addtoCart } = this.props;

    return (
      <section>
        <Link data-testid="shopping-cart-button" to={{
          pathname: "/shoppingcart",
          cartItems: addtoCart,
        }}>Carrinho de compras</Link>
      </section>
    )
  }

}

export default ShoppingCartButton;
