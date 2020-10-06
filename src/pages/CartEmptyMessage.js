import React, { Component } from 'react';

class CartEmptyMessage extends Component {
  constructor() {
    super();

    this.state = {
      isEmpty: true,
      cartProducts: [],
    }
  }

  componentDidMount() {
    
    if (localStorage.cart) {
      const shoppingCart = JSON.parse(localStorage.cart);
      this.setState({
        isEmpty: false,
        cartProducts: shoppingCart,
      });
    } else {
      this.setState({ isEmpty: true })
    }
  }

  render() {
    const { isEmpty, cartProducts } = this.state;

    return (
      (isEmpty)
      ? (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      )
      : (
        cartProducts.map((item) => (
          <div key={item.id}>

            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <span data-testid="shopping-cart-product-quantity">Quantity: {item.amount}</span>
          </div>
        ))
      )
    );
  }

  
}

export default CartEmptyMessage;
