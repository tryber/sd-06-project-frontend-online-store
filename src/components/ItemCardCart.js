import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ItemCard.css';

class ItemCardCart extends Component {
  constructor(props) {
    super(props);

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
      <li key={ id }>
        <button
          type="button"
        >
          X
        </button>
        <br />
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ `R$ ${parseFloat(quantity * price).toFixed(two)}` }</p>
        <button
          type="button"
          onClick={ this.decreaseQuantity }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ this.increaseQuantity }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </li>
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
