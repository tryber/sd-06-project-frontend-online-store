import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    const { cartList } = this.props;

    return (

      <Link
        data-testid="shopping-cart-button"
        to={ { pathname: '/cart', state: cartList } }
      >
        carrinho
      </Link>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
