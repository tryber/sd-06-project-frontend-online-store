import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.state = {
      cartItems,

    };
    this.handleProductQuantityAltering = this.handleProductQuantityAltering.bind(this);
  }

  handleProductQuantityAltering({ target }, id) {
    const { cartItems } = this.state;
    const productsUpDateQuantity = cartItems.map((cartItem) => {
      if (cartItem.product.id !== id) {
        return cartItem;
      }
      const { name } = target;
      if (name === 'plus') {
        cartItem.quantity += 1;
      } else if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    });
    this.setState({
      cartItems: productsUpDateQuantity,
    });
  }

  componentWillUnmount() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ (event) => this.handleProductQuantityAltering(event, product.id) }
                name="minus"
              >
                -

              </button>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ (event) => this.handleProductQuantityAltering(event, product.id) }
                name="plus"
              >
                +

              </button>
              <button type="button">Remover</button>
            </div>
          ))}
          <button type="button">Limpar carrinho</button>
          <button type="button">Finalizar compra</button>
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
