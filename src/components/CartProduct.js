import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  render() {
    const { quantity } = this.state;
    const { cartProduct } = this.props;
    const { title, thumbnail } = cartProduct;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuantity }
        >
          +
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  cartProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default CartProduct;
