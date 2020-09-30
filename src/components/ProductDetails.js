import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="product-detail-name">TITULO</h2>
        <img src="FOTO" alt="foto do produto" />
        <p>PRICE</p>
        <h3>Especificações Técnicas</h3>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <button type="button">CARRINHO</button>
        </Link>
      </div>
    );
  }
}

export default ProductDetails;
