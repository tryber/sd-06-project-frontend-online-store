import React from 'react';

class ProductCard extends React.ComponentComponent {
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductCard;
