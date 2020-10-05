import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { cart } from '../dados/cart_arrayProductList';

class CartPage extends Component {
  constructor() {
    super();
    this.handleClayton = this.handleClayton.bind(this);
    this.state = {};
  }

  handleClayton({ target }) {
    const id = target.name;
    const value = target.value === '+' ? 1 : -1;
    const product = cart.find((product) => product.id === id);

    if (product.quantity < product.available_quantity) {
      if (!this.state[id]) {
        this.setState({ [id]: 1 + value });
        this.catQuantity(value, id);
      } else if (this.state[id] !== 1) {
        this.setState((stateAntigo) => ({ [id]: stateAntigo[id] + value }));
        this.catQuantity(value, id);
      }
    }
  }

  catQuantity(value, id) {
    if (value === -1) {
      if (cart.find((product) => product.id === id).quantity > 1) {
        cart.find((product) => product.id === id).quantity += value;
      }
    } else {
      cart.find((product) => product.id === id).quantity += value;
    }
  }

  render() {
    console.log(cart);

    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Carrinho de compras</h1>
        {
          (cart <= 0 )
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map((product) => {
              const { id, thumbnail, title, price } = product;
              return (
                <div key={id}>
                  <img src={thumbnail}/>
                  <h2 data-testid="shopping-cart-product-name">{title}</h2>
                  <div className="quantidade">
                    <button
                      value="-"
                      name={id}
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={this.handleClayton}
                    > - </button>
                    <p data-testid="shopping-cart-product-quantity">{this.state[id] ? this.state[id] : 1}</p>
                    <button
                      value="+"
                      name={id}
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={this.handleClayton}
                    > + </button>
                  </div>
                  <p>{`R$${price}`}</p>
                </div>
              );
            })
        }
        <Link to="/checkout" data-testid="checkout-products"><button>Finalizar Compra</button></Link>
      </div>
    );
  }
}

export default CartPage;
