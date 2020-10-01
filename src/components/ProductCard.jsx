import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={`image${title}`}/>
      </div>
    )
  }
}