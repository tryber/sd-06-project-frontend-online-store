import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCartButton extends Component {
  render() {
    const { cartProductItens, cartProductList } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart',
            cartProductList,
            cartProductItens } }
          data-testid="shopping-cart-button"
        >
          <button type="button">Cart</button>
        </Link>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  cartProductItens: PropTypes.number.isRequired,
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCartButton;
