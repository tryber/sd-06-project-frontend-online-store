import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
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


  render() {
    const { cartList } = this.props;


    return (
      <div>
        <Link

          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', state: cartList } }
        >
          <button type="button" className="icon-bars">
            <span className="popup__cart_quantity" data-testid="shopping-cart-size">
              {
                this.sumAllCartItemsQuantity(cartList)
              }
            </span>
            <FontAwesomeIcon icon="shopping-cart" />
          </button>

        </Link>


      </div>

    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
