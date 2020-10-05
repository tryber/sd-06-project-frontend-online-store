import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to={ { pathname:"/shoppingcart",
          cartProductList: this.props.cartProductList,
          cartTotalItens: this.props.cartTotalItens
        } } data-testid="shopping-cart-button">
          Carrinho<span>Itens no carrinho: { this.props.cartTotalItens }</span>
        </Link>
      </div>
    )
  }
}

export default ShoppingCartButton;
