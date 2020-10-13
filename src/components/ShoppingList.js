import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmptyCart from '../pages/EmptyCart';
import CartProduct from './CartProduct';


class ShoppingList extends React.Component {
  render() {
    const { addToCart, subtractFromCart, cartProducts } = this.props;

    if (cartProducts.length < 1) {
      return (
        <EmptyCart />
      );
    }

    return (
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            key={ cartProduct.id }
            cartProduct={ cartProduct }
            addToCart={ addToCart }
            subtractFromCart={ subtractFromCart }
          />
        ))}
        <Link data-testid="checkout-products" to="/Payment">
          Finalizar compra
        </Link>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  subtractFromCart: PropTypes.func.isRequired,
};

export default ShoppingList;
