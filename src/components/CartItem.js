import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

class CartItem extends Component {
  constructor() {
    super();
    this.goingUp = this.goingUp.bind(this);
    this.goingDown = this.goingDown.bind(this);
  }

  goingUp() {
    const { item, updateItem } = this.props;
    updateItem(item, true);
  }

  goingDown() {
    const { item, updateItem } = this.props;
    updateItem(item, false);
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail, price, quantity } = item;
    return (
      <div className="cart-item">
        <img src={ thumbnail } alt="selectedProduct" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.goingDown }
        >
          -
        </button>
        <div
          data-testid="shopping-cart-product-quantity"
          className="cart-item-number"
        >
          { quantity }
        </div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.goingUp }
        >
          +
        </button>
        <p className="price">{ (price * quantity).toFixed(true + true) }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CartItem;
