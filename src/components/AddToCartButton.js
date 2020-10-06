import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  addProductToCart(newProduct) {
    const { updateCartListAndItens } = this.props;
    updateCartListAndItens(newProduct);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addProductToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default AddToCartButton;
