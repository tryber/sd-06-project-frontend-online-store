import React, { Component } from 'react';
import ProductInCart from './ProductInCart';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends Component {
  render() {
    const { cartList, cartQuantity } = this.props;
    if (cartQuantity > 0) {
      return (
        <div>
          { cartList.map((product) => (
            <ProductInCart product={product} key={ product.id } />
          )) }
          <Link to="/checkout" data-testid="checkout-products" >Finalizar Compra</Link>
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}
