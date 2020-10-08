import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart">
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
