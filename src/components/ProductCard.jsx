import React from 'react';
import '../styles/ProductCard.css';

export default class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.product;
    return (
      <article data-testid="product">
        <p>{title}</p>
        <img src={thumbnail} alt={title}/>
        <p>R$ {price}</p>
      </article>
    );
  }
}