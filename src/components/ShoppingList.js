import React from 'react';
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
