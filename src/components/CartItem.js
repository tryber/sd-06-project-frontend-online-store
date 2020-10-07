import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

class CartItem extends Component {
  constructor() {
    super();
    this.goingUp = this.goingUp.bind(this);
    this.goingDown = this.goingDown.bind(this);
  }

  updatePrice(number, event) {
    event.persist();
    console.log(event.target.parentNode);
    event.target.parentNode.lastChild.innerText = number;
  }

  goingUp(event) {
    const { item, updateItem } = this.props;
    event.persist();
    const number = parseInt(event.target.previousElementSibling.innerText, 10);
    event.target.previousElementSibling.innerText = number + 1;
    // this.updatePrice(number + 1, event);
    updateItem(item, true);
  }

  goingDown(event) {
    event.persist();
    const { item, updateItem } = this.props;
    const number = parseInt(event.target.nextSibling.innerText, 10);
    // if (number) {
    // event.target.nextSibling.innerText = 0;
    // event.target.parentNode.lastChild.innerText = 0;
    // } else {
    event.target.nextSibling.innerText = number - 1;
    updateItem(item, false);
    // this.updatePrice(number - 1, event);

    // }
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail, price } = item;
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
          { item.quantity }
        </div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.goingUp }
        >
          +
        </button>
        <p className="price">{price}</p>
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
