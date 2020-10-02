import React from 'react';
import PropTypes from 'prop-types';
import imgCart from '../img/imgCart.jpg';

class ShoppingCart extends React.Component {
  constructor(props) {
    super();
    const { cartItems, addedItems } = props;
    this.state = {
      items: [...cartItems],
      addedItems,
    };
  }

  render() {
    const { items, addedItems } = this.state;

    if (items.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          <img src={ imgCart } alt="shopping-cart-button" />
        </div>
      );
    }

    return (
      items.map((item) => {
        const { id, title, thumbnail } = item;

        return (
          <div key={ id }>
            <h3 data-testid="shopping-cart-product-name">{ title }</h3>
            <img alt="Product in the cart" src={ thumbnail } />
            <p data-testid="shopping-cart-product-quantity">{ addedItems[`${id}`] }</p>
          </div>
        );
      })
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addedItems: PropTypes.shape().isRequired,
};

export default ShoppingCart;
