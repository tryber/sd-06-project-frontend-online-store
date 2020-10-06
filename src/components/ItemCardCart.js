import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ItemCardCart.css';

class ItemCardCart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };

    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  decreaseQuantity() {
    const { quantity } = this.state;
    this.setState({ quantity: (quantity - 1) });
  }

  increaseQuantity() {
    const { quantity } = this.state;
    this.setState({ quantity: (quantity + 1) });
  }

  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    const { quantity } = this.state;
    const two = 2;
    return (
      <div className="product-card-cart" key={ id }>
        <button type="button" className="circle-button">X</button>
        <img src={ thumbnail } alt={ title } />
        <div className="product-info">
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ `R$ ${parseFloat(quantity * price).toFixed(two)}` }</p>
        </div>
        <button
          type="button"
          onClick={ this.decreaseQuantity }
          data-testid="product-decrease-quantity"
          className="circle-button"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ this.increaseQuantity }
          data-testid="product-increase-quantity"
          className="circle-button"
        >
          +
        </button>
      </div>
    );
  }
}

ItemCardCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCardCart;
