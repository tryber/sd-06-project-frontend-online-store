import React from 'react';
import Product from './Product';


class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      emptyCart: false,
    }

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
    this.setState({ emptyCart: true });
  }

  render() {
    const { emptyCart } = this.state;
    if (emptyCart) return <p>carrinho vazio</p>
    return (
    <div data-testid="shopping-cart-empty-message">
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
