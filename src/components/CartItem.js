import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    event.target.parentNode.lastChild.innerText = number * 100;
  }

  goingUp(event) {
    event.persist();
    const number = parseInt(event.target.previousElementSibling.innerText, 10);
    event.target.previousElementSibling.innerText = number + 1;
    this.updatePrice(number + 1, event);
  }

  goingDown(event) {
    event.persist();
    console.log(event);
    const number = parseInt(event.target.nextSibling.innerText, 10);
    if (number === 0) {
      event.target.nextSibling.innerText = 0;
      event.target.parentNode.lastChild.innerText = 0;
    } else {
      event.target.nextSibling.innerText = number - 1;
      this.updatePrice(number - 1, event);
    }
  }

  render() {
    // const { iten } = this.props;
    // const { title, thumbnail, price, id } = iten;
    return (
      <div className="cart-item">
        <img src="#" alt="selectedProduct" />
        <button type="button" onClick={ this.goingDown }>-</button>
        <div className="cart-item-number">{0}</div>
        <button type="button" onClick={ this.goingUp }>+</button>
        <p className="price">price</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  iten: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default CartItem;
