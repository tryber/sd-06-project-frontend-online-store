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

  render() {
    const { cart } = this.state;
    return cart === null ? (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    ) : (
      <CreateCart localStorageMount={ this.localStorageMount } cart={ cart } />
    );
  }
}
