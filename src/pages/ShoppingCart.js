import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';
import ShoppingList from '../components/ShoppingList';


class ShoppingCart extends React.Component {
  render() {
    const { addToCart, subtractFromCart, cartProducts } = this.props;

    return (
      <div>
        <CartBtn />
        <h1>Carrinho de compras</h1>
        <ShoppingList
          addToCart={ addToCart }
          subtractFromCart={ subtractFromCart }
          cartProducts={ cartProducts }
        />
        
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  subtractFromCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
