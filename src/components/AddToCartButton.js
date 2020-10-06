import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class AddToCartButton extends Component {
  render() {
    const { product, details } = this.props;
    let testId = 'product-add-to-cart';

    if (details) {
      testId = 'product-detail-add-to-cart';
    }
    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart', state: product } }
          data-testid={ testId }
        >
          Adicionar ao carrinho
        </Link>
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
  details: PropTypes.bool,
};

export default AddToCartButton;
