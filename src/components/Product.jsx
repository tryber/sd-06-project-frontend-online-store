import React, { Component } from 'react';

class Product extends Component {
  render() {
    console.log(this.props)
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <img src={thumbnail} alt={`imagem ${title}`} />
        <p>{price}</p>
      </div>
    );
  }
}

export default Product;