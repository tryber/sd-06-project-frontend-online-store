import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.clearCart = this.clearCart.bind(this);

    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  clearCart() {
    localStorage.clear();
    document.location.reload();
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    let itens;
    if (cart.length > zero) {
      itens = cart.map((item) => <ItemCart key={ item.id } product={ item } />);
    } else {
      itens = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Meu Carrinho</h1>
        <button type="button" onClick={ () => this.clearCart() }>Limpar Carrinho</button>
        {itens}
        <p>Valor Total:</p>
        <button
          type="button"
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
