import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
 
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Thumbnail" />
        <h4>{ title }</h4>
        <h5>{ price }</h5>
        <Link to={ { pathname: `/shoppingcart/`, product: this.props.product } }
          data-testid="product-add-to-cart">
          ADICIONAR AO CARRINHO
        </Link>

      </div>
    );
  }
}
