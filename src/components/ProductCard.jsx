import React, { Component } from 'react';

export default class ProductCard extends Component {
  constructor(props) {
    super();

    this.state = {
      productId: props.product.id,
      title: props.product.title,
      price: props.product.price,
      thumbnail: props.product.thumbnail,
      quantity: 1,
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const obj = {
      title: this.state.title,
      price: this.state.price,
      thumbnail: this.state.thumbnail,
      quantity: this.state.quantity,
    };

    if (!localStorage.getItem('cart')) {
      const array = [];
      array.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(array));
    } else { 
      const save = JSON.parse(localStorage.getItem('cart'));
      save.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(save));
    }
  }
  
  render() {
    const { title, price, thumbnail, quantity } = this.props.product;

    return (
      <article data-testid="product">
        <div data-testid="shopping-cart-product-name">{title}</div>
        <div>{price}</div>
        <div data-testid="shopping-cart-product-quantity">{quantity}</div>
        <img src={thumbnail} alt={title}/>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </article>
    );
  }
}