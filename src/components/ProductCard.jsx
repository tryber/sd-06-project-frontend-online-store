import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  handleClick(productObject) {
    this.props.updateCart(productObject);
  }

  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Thumbnail" />
        <h4>{ title }</h4>
        <h5>{ price }</h5>
        <Link
          to={ { pathname: `/product/${id}`,
            product: this.props.product,
            updateCart: this.props.updateCart
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(this.props.product) }
        >
          add to cart
        </button>
      </div>
    );
  }
}
