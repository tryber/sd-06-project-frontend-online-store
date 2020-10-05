import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  
  render() {
    const { cartList, cartQuantity } = this.props;
    if (cartQuantity > 0) {
      return (
        <div>
          <p data-testid="shopping-cart-product-quantity">
            {cartQuantity}
          </p>
          { cartList.map((product) => (
            <p data-testid="shopping-cart-product-name" key={ product }>
              {product}
            </p>
          ))}
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}
