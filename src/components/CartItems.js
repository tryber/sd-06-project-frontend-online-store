import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItems extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { title, changeQuantity } = this.props;
    const { name } = target;
    changeQuantity(name, title);
  }

  render() {
    const { title, quantity } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          name="decrease"
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleClick }
        >
          -
        </button>
        <button
          name="increase"
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleClick }
        >
          +
        </button>
      </div>
    );
  }
}

CartItems.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export default CartItems;
