import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ItemCardCart extends Component {
  render() {
    const { product } = this.props;
    const { id, title, price, quantity, thumbnail } = product;
    return (
      <li key={ id }>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ `R$ ${price}` }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
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
