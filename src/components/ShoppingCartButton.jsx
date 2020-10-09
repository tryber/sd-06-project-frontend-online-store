import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to={ { pathname:"/shoppingcart",
          cartProductList: this.props.cartProductList,
          cartTotalItens: this.props.cartTotalItens,
          emptyCart: this.props.emptyCart
        } } data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <span data-testid="shopping-cart-size">{ this.props.cartTotalItens }</span>
      </div>
    )
  }
}

export default ShoppingCartButton;
