import React from 'react';


class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.emptyCart = this.emptyCart.bind(this);
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
  }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  increaseButton() {
    return (
      <button type="button" data-testid="product-increase-quantity">
        (+)
      </button>
    );
  }

  decreaseButton() {
    return (
      <button type="button" data-testid="product-decreate-quantity">
        (-)
      </button>
    );
  }

  render() {
    // if (true) return this.emptyCart()
    console.log(this.props);
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        {this.increaseButton()}
        {this.decreaseButton()}
      </div>
    );
  }
}

export default ShoppingCart;
