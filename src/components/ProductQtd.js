import React, { Component } from 'react';

class ProductQtd extends Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  decreaseQuantity() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity - 1 });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="quantity-div">
        <div className="quantity-div">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increaseQuantity }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">
            {`${quantity}`}
          </p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decreaseQuantity }
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default ProductQtd;
