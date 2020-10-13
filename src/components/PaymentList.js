import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';


class PaymentList extends React.Component {
  render() {
    const { addToCart, subtractFromCart, cartProducts } = this.props;
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

PaymentList.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  subtractFromCart: PropTypes.func.isRequired,
};

export default ShoppingList;
