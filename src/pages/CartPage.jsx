import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';

class CartPage extends Component {
  constructor() {
    super();
    this.handleClayton = this.handleClayton.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  handleClayton({ target }) {
    const id = target.name;
    const value = target.value === '+' ? 1 : -1;
    // console.log(value);
    // console.log(target.value);
    if (!this.state[id]) {
      this.setState({ [id]: 1 + value });
    } else {
      this.setState((stateAntigo) => ({ [id]: stateAntigo[id] + value }));
    }
  }

  render() {

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
      </div>
    );
  }
}

export default CartPage;
