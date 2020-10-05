import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  
  render() {
    const { product, handleAddToCart } = this.props;
    const {id, title, thumbnail, price, category_id } = this.props.product;

    return (
      <div data-testid="product" className="product-card">
        <div className="card-title">{title}</div>
        <img src={ thumbnail } alt={`${title} PIC`} />
        <p>{`Price: ${price} R$`}</p>
        <div>
          <Link data-testid="product-detail-link" to={`/products/${category_id}/${id}`}>Detalhes do produto</Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => { handleAddToCart(product); } }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}
