import React from 'react';
import PropTypes from 'prop-types';
import imgCart from '../img/imgCart.jpg';

class ShoppingCart extends React.Component {
  constructor(props) {
    super();
    const { cartItems } = props;
    this.state = { items: [...cartItems] };
  }

  render() {
    const { items } = this.state;

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
        const { id, title, thumbnail, price } = item;
        return (
          <div key={ id }>
            <h3>{ title }</h3>
            <img alt="Product in the cart" src={ thumbnail } />
            <p>{ price }</p>
          </div>
        );
      })
    );
  }
}



export default ShoppingCart;
