import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.addItemToArray = this.addItemToArray.bind(this);
  }

  addItemToArray(title, id, price) {
    const item = {
      titulo: title,
      sku: id,
      preco: price,
    }
    localStorage.produto = item;
  }

  createCartItemElement(title, price) {
    return (
      <li className="">
        <p>NOME: {title}</p>
        <p>PREÇO: {price}</p>
      </li>
    )
  }

  render() {
    const { location } = this.props;
    const { state } = location;
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
