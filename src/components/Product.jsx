import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Product.css';

class Product extends Component {
  constructor() {
    super();

    this.state = {
      clickCounter: 0,
      cartItems: [],
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(){
    const obj = this.props.item;
    const storageLength = localStorage.length;
    localStorage.setItem(storageLength, JSON.stringify(obj));
  }

  render() {
    const { title, price, thumbnail, id } = this.props.item;
    return (
      <div className="card-container" data-testid="product">
        <h4 data-testid="product-detail-name">{title}</h4>
        <img className="image-item" src={thumbnail} alt={`imagem ${title}`} />
        <p><strong>{`R$ ${price}`}</strong></p>
        <Link 
          data-testid="product-detail-link"
          to={{
            pathname:`/product-details/${id}`,
            state: this.props.item
          }}
          >detalhes
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={this.addToCart}
          >adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default Product;