import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  render() {
    const { products } = this.props.location.state;
    const { id } = this.props.match.params;
    const product = products.find((product) => id === product.id);
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">cart</Link>
        <div data-testid="product-detail-name">
          <h2>{product.title}</h2>
          <span>
            R$
            {' '}
            {product.price}
          </span>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <div>
            <p>especificações Tecnicas</p>
            <ul>
              <li>Cada especificação</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
