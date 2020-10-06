// let cartList = [];

// console.log(cartList);

// export function addItem(title, quantity) {
//   const newItem = { title, quantity };

//   cartList = cartList.concat({ title: newItem.title, quantity: newItem.quantity });
// }

// export { cartList };
import React, { Component } from 'react';

class AddItem extends Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);

    this.state = {
      cartList: [],
    };
  }

  async addItem(title, quantity) {
    const newItem = { title, quantity };

    this.setState((previousState) => ({
      cartList: previousState.cartList.concat(newItem),
    }));
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
    const { cartList } = this.state;
    if (cartList.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      );
    }

    return (
      <div>
        {cartList.map((product) => this.renderItem(product))}
      </div>
    );
  }
}

export default AddItem;
