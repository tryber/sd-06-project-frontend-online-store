import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class AddToCartButton extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart', state: product } }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </Link>
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
