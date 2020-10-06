import React, { Component } from 'react';
import * as addItem from './addItem';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      productList: addItem.cartList,
    };
  }

  render() {
    const { productList } = this.state;
    if (productList === '') {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      );
    }

    return (
      <div>
        {productList.map((product, index) => <div key={ index }>{product.title}</div>)}
      </div>
    );
  }
}

export default ShoppingCart;
export { ShoppingCart as addItem };
