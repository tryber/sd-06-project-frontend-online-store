import React from 'react';

class ProductCard extends React.ComponentComponent {
  render() {
    return (
      <div data-testid="product">
        <h1>Titulo</h1>
        <img src="" alt= "" />
        <p>Preco</p>
      </div>
    );
  }
}

export default ProductCard;
