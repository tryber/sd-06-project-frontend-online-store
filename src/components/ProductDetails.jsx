import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

  render() {
    const { location: { state: {attributes, price, thumbnail, title } } } = this.props;
    return (
    <div data-testid="product-detail-name">
      <h1>{`${title}- R$${price}`}</h1>
      <img src={thumbnail} alt="imagem do produto"/>
      <div>
        <p>especificações técnicas</p>
        <ul>
          {attributes.map((spec) =><li key={spec.id}>{`${spec.name}:  ${spec.value_name}`}</li>)}
        </ul>
      </div>
      <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
    </div>
    );
  }
}

export default ProductDetails;
