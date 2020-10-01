import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <article data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={title}/>
      </article>
    );
  }
}