import React from 'react';
import EmptyCart from '../pages/EmptyCart';
import CartProduct from './CartProduct';


class ShoppingList extends React.Component {
  render() {
    const { addToCart, cartProducts } = this.props;

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
          />
        ))}
      </div>
    );
  }
}

export default ShoppingList;
