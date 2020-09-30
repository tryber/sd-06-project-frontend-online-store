import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ProductCard extends Component {
  render() {
    const {id, title, thumbnail, price, category_id } = this.props.product;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={`${title} PIC`} />
        <p>{`Price: ${price} R$`}</p>
        <div>
          <Link data-testid="product-detail-link" to={`/products/${category_id}/${id}`}>Detalhes do produto</Link>
        </div>
      </div>
    );
  }
}
