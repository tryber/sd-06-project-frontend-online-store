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
          { cartList.map((product) => (<div key={ product.id }>
              <p data-testid="shopping-cart-product-name">
                {product.title}
              </p>
              <p>
                {product.quantityInCart}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}
