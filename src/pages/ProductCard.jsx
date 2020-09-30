import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props.product;
    console.log(this.props.product)
    return (
      <div data-testid="product">
        <img src={thumbnail} alt="Thumbnail" />
        <h4>{title}</h4>
        <h5>{price}</h5>
      </div >
    );
  }
}
