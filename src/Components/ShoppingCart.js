import React, { Component } from 'react';
/*
Felipe Gomes

Problemas para resolver:
1- alterar quantidades de cada item,
2- adicionar item de outra categoria sem limpar o carrinho,
*/

class ShoppingCart extends Component {
  constructor() {
    super();

    this.clearCart = this.clearCart.bind(this);
  }

  clearCart() {
    localStorage.clear();
    document.location.reload();
  }

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let itens;
    if (cart) {
      itens = cart.map((prod) => (
        <div data-testid="product" key={ prod.id }>
          <h4 data-testid="shopping-cart-product-name">{ prod.title }</h4>
          <img src={ prod.thumbnail } alt="fotografia do produto" />
          <p><span>{`R$: ${prod.price}`}</span></p>
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>
      ));
    } else {
      itens = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <h1>Meu Carrinho</h1>
        <button type="button" onClick={ () => this.clearCart() }>Limpar Carrinho</button>
        {itens}
      </div>
    );
  }
}

export default ShoppingCart;
