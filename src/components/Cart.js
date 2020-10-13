import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import CartList from './CartList';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };
  }

  componentDidUpdate() {
    const { cartList } = this.props;
    localStorage.setItem('cartlist', JSON.stringify(cartList));
  }

  sumAllCartItemsQuantity(cartList) {
    const zero = 0;
    return Object.values(cartList)
      .reduce((prev, product) => product.quantity + prev, zero);
  }


  render() {
    const { cartList, closeInactiveDropdowns,
      removeCartItem, handleCartDropdown, cartDropdown } = this.props;

    return (
      <div className="shopping-cart-container">
        <button
          type="button"
          className="icon-bars cart"
          onClick={ () => handleCartDropdown() }
        >
          <span
            className="popup__cart_quantity"
            data-testid="shopping-cart-size"
          >
            {
              this.sumAllCartItemsQuantity(cartList)
            }
          </span>
          <FontAwesomeIcon icon="shopping-cart" className="cart-img" />
        </button>
        {cartDropdown
         && <div>
           <CartList
             cartList={ cartList }
             cartDropdown={ cartDropdown }
             removeCartItem={ removeCartItem }
             closeInactiveDropdowns={ closeInactiveDropdowns }
           />
           <Link
             data-testid="shopping-cart-button"
             to={ { pathname: '/cart', state: cartList } }
           />
            </div> }
      </div>

    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
