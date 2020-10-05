import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    const { productCart } = this.props;
    return (
      <div>
        <Link to={ { pathname: '/shopping-cart', state: { productCart } } }>
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;

ShoppingCartButton.propTypes = {
  productCart: PropTypes.object,
}.isRequired;
