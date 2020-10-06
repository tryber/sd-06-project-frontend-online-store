import React, { Component } from 'react';

class CheckoutProducts extends Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, quantityInCart } = product;
    return (
      <div>
        <img src={ thumbnail } alt={ title }/>
        <p>
          <span>Produto: { title }</span>
          <span>Quantidade: { quantityInCart }</span>
          <span>Preço unitário: { price }</span>
        </p>
      </div>
    );
  }
}

export default CheckoutProducts;
