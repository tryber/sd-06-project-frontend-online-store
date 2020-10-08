import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';
import ShoppingList from '../components/ShoppingList';


class ShoppingCart extends React.Component {
  render() {
    const { addToCart, cartProducts } = this.props;

    return (
      <div>
        <CartBtn />
        <h1>Carrinho de compras</h1>
        <ShoppingList
          addToCart={ addToCart }
          cartProducts={ cartProducts }
        />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default ShoppingCart;
