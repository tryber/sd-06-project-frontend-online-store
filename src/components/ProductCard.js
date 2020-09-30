import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <div className="product-card-price">{ price }</div>
      </div>
    );
  }
}

export default ProductCard;
