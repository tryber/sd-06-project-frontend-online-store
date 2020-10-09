import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  render() {
    const { cartProduct, addToCart } = this.props;
    const { title, thumbnail, quantity } = cartProduct;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => addToCart(cartProduct) }
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
    quantity: PropTypes.number,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CartProduct;
