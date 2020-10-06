import React, { Component } from 'react';

class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increaseItemProduct = this.increaseItemProduct.bind(this);
    this.decreateItemProduct = this.decreateItemProduct.bind(this);
  }

  increaseItemProduct() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decreateItemProduct() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="product-decreate-quantity"
          onClick={ () => this.decreateItemProduct() }
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.increaseItemProduct() }
        >
          +
        </button>
      </div>
    );
  }
}

export default ProductQuantity;
