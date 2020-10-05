import React from 'react';
import PropTypes from 'prop-types';

class CartProduct extends React.Component {
  render() {
    const { cartProduct, cartQuantity } = this.props;
    const { title, thumbnail } = cartProduct;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-quantity">{ cartQuantity }</p>
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
