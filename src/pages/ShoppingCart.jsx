import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.state = {
      cartItems,

    };
  }

  render() {
    const { cartItems } = this.state;
    if (cartItems[0]) {
      return (
        <div>
          {cartItems.map(({ product, quantity }) => (
            <div key={ product.id }>
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

export default ShoppingCart;
