import React, { Component } from 'react';

class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <span data-testid="product-increase-quantity">-</span>
        <span>{quantity}</span>
        <span data-testid="product-decreate-quantity">+</span>
      </div>
    );
  }
}

export default ProductQuantity;