import React, { Component } from 'react';
import CreateCart from '../components/createCart';

export default class shoppingCart extends Component {
  constructor() {
    super();
    this.localStorageMount = this.localStorageMount.bind(this);
    this.state = {
      cart: [],
      // products: [],
    };
  }

  componentDidMount() {
    this.localStorageMount();
  }
  
  async localStorageMount() {
    const cartLocalStorage = await JSON.parse(
      localStorage.getItem('cartLocal'),
    );
    this.setState({
      cart: cartLocalStorage,
    });
  }

// func to sum products price 
//  async cartTotalValue(target) {
//     const items = document.getElementsByTagName('li');
//     let itemPrice = 0;
  
//     for (let i = 0; i < items.length; i += 1) {
//       itemPrice += parseFloat(items[i].innerHTML.split('$')[1]);
//     }
// };

  render() {
    const { cart } = this.state;
    return cart === null ? (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    ) : (
      <div>
        {/* <p>Price: {this.cartTotalValue}</p> */}
        <CreateCart localStorageMount={ this.localStorageMount } cart={ cart } />
      </div>
    );
  }
}
