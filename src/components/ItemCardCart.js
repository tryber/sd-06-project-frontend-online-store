import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ItemCard.css';

class ItemCardCart extends Component {
  // constructor() {
  //   super();
  // }

  // handleClicks({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  render() {
    const { product } = this.props;
    const { id, title, price, quantity, thumbnail } = product;
    return (
      <li key={ id }>
        <button type="button">X</button>
        <br />
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ `R$ ${price}` }</p>
        <button
          type="button"
          onClick={ console.log('diminui 1') }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ console.log('soma 1') }
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
