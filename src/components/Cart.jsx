import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  getProduct() {
    const allProduct = [];
    let aux = '';
    for (let index = 0; index < localStorage.length; index += 1) {
      aux = localStorage.getItem(index)
      allProduct.push(JSON.parse(aux));
    }
    return allProduct;
  }

  clearCart() {
    localStorage.clear();
  }

  render() {
    if(this.getProduct().length < 1) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <p>Seu carrinho está vazio</p>
        </div>
      );
    }
    
    return (
      <div>
        <button onClick={this.clearCart}>limpar carrinho</button>
        {this.getProduct()
        .map(itens => 
        <div key={itens.id}data-testid="shopping-cart-product-name">
          <h3>{itens.title}</h3>
          <img src={itens.thumbnail} alt={`imagem de ${itens.title}`} />
          <p>{itens.price}</p>
          <p>quantidade</p>
          <label>
            <button data-testid="shopping-cart-product-quantity">1</button>
          </label>
        </div>)}
      </div>
    );
  }
}

export default Cart;
