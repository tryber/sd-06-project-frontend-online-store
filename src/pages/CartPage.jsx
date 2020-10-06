import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';
import '../style/cart.css';
import BackIcon from '../back.svg';

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
      if (value === -1) {
        if (cart.find((product) => product.id === id).quantity > 1) {
          cart.find((product) => product.id === id).quantity += value;
          this.setState(() => ({ [id]: cart.find((product) => product.id === id).quantity }));
        }
      } else {
        cart.find((product) => product.id === id).quantity += value;
        this.setState(() => ({ [id]: cart.find((product) => product.id === id).quantity }));
      }
    }
  }
  render() {
    return (
      <div className="cart-container">
        <Link to="/"><img src={BackIcon} width="30" /></Link>
        <h1>Carrinho de compras</h1>
        {
          (cart <= 0 )
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map((product) => {
              const { id, thumbnail, title, price } = product;
              return (
                <div key={id} className="cart-product">
                  <img src={thumbnail}/>
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <div className="quantidade qty-price">
                    <button
                      value="-"
                      name={id}
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={this.handleClayton}
                      className="minus"

                    > - </button>
                    <p data-testid="shopping-cart-product-quantity">
                      {this.state[id] ? this.state[id] : cart.find((product) => product.id === id).quantity}
                    </p>
                    <button
                      value="+"
                      name={id}
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={this.handleClayton}
                      className="add"
                    > + </button>
                  </div>
                  <p>{`R$${price}`}</p>
                </div>
              );
            })
        }
        <Link to="/checkout" data-testid="checkout-products" ><button className="finalizarCompra">Finalizar Compra</button></Link>
      </div>
    );
  }
}

export default CartPage;
