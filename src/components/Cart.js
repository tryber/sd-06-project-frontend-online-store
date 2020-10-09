import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import CartList from './CartList.js';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };
  }

  componentDidUpdate() {
    const { cartList } = this.props;
    const zero = 0;

    const cartVolume = this.sumAllCartItemsQuantity(cartList);
    if (cartVolume > zero) {
      localStorage.setItem('cartlist', JSON.stringify(cartList));
    }
  }


  sumAllCartItemsQuantity(cartList) {
    const zero = 0;
    return Object.values(cartList)
      .reduce((prev, product) => product.quantity + prev, zero);
  }

  handleDropdown() {
    const { dropdown } = this.state;
    this.setState({ dropdown: !dropdown });
  }

  render() {
    const { cartList } = this.props;
    const { dropdown } = this.state;
    return (
      <div>
        <button
          type="button"
          className="icon-bars"
          onClick={ () => this.handleDropdown() }
        >
          <span
            className="popup__cart_quantity"
            data-testid="shopping-cart-size"
          >
            {
              this.sumAllCartItemsQuantity(cartList)
            }
          </span>
          <FontAwesomeIcon icon="shopping-cart" />
        </button>
        <CartList cartList={ cartList } dropdown={ dropdown } />
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', state: cartList } }
        />
      </div>

    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
