import React, { Component } from 'react';
import * as addItem from './addItem';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      productList: addItem.cartList,
    };
  }

  renderItem(product) {
    return (
      <div key={ product.title }>
        <div data-testid="shopping-cart-product-name">
          {product.title}
        </div>
        <div data-testid="shopping-cart-product-quantity">
          {product.quantity.toString()}
        </div>
      </div>
    );
  }

  render() {
    const { productList } = this.state;
    if (productList.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      );
    }

    return (
      <div>
        {productList.map((product) => this.renderItem(product))}
      </div>
    );
  }
}

export default ShoppingCart;
export { ShoppingCart as addItem };
