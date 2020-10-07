import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  addProductToCart(newProduct) {
    const { updateCartListAndItens } = this.props;
    updateCartListAndItens(newProduct);
  }

  render() {
    const { product, details } = this.props;
    let testId = 'product-add-to-cart';

    if (details) {
      testId = 'product-detail-add-to-cart';
    }

    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
          onClick={ () => this.addProductToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}


AddToCartButton.defaultProps = {
  details: false,
};

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  updateCartListAndItens: PropTypes.func.isRequired,
  details: PropTypes.bool,
};

export default AddToCartButton;
