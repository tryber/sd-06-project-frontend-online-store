import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { title, thumbnail, price } = this.props.location.state.product;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ `${title} - ${price}$` }</h2>
        <img src={ thumbnail } alt="product" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
