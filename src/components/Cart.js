import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  componentDidMount() {
    /* pega do local storage */
  }


  componentDidUpdate(prevProps) {
    const { cartList } = this.props;

    const prevQuantity = this.sumAllCartItemsQuantity(prevProps.cartList);
    const currentQuantity = this.sumAllCartItemsQuantity(cartList);
    if (prevQuantity !== currentQuantity) {
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
    const zero = 0;


    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', state: cartList } }
        >
          carrinho
        </Link>
        <span data-testid="shopping-cart-size">
          {
            Object.values(cartList)
              .reduce((prev, product) => product.quantity + prev, zero)
          }
        </span>
      </div>

    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
