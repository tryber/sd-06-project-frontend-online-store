import React, { Component } from 'react';

import '../css/Product.css';

class Product extends Component {
  render() {
    const { title, price, thumbnail } = this.props.item;
    return (
      <div className="card-container" data-testid="product">
        <h4>{title}</h4>
        <img className="image-item" src={thumbnail} alt={`imagem ${title}`} />
        <p><strong>{`R$ ${price}`}</strong></p>
      </div>
    );
  }
}

export default Product;