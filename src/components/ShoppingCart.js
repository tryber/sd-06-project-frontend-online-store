import React, { Component } from 'react';
import * as addItem from './addItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      quantity: 1,
      price: 1,
    }
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, quantity, price } = state;
    // const { title, id, price } = state;
    return (
      <div>
        {this.addItemToArray()}
        {localStorage.produto ? 
          <ol>
            {this.createCartItemElement(localStorage.produto)}
          </ol> :
          <span>Seu carrinho está vazio.</span>}
      </div>
    );
  }
}

export default ShoppingCart;
