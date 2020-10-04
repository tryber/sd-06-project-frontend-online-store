import React from 'react';
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

export default ShoppingCart;
