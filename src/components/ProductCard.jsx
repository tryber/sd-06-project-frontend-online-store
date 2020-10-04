import React, { Component } from 'react';

export default class ProductCard extends Component {
  constructor(props) {
    super();

    this.state = {
      productId: props.product.id,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const callback = this.props.callback;

    callback(this.state.productId);
  }

  render() {
    const { title, price, thumbnail } = this.props.product;

    return (
      <article data-testid="product">
        <div data-testid="shopping-cart-product-name">{title}</div>
        <div>{price}</div>
        {/* <div data-testid="shopping-cart-product-quantity">{quantity}</div> */}
        <img src={thumbnail} alt={title}/>
        <button
          type="submit"
          data-testid="product-add-to-cart"
          onClick={ this.onClick }
        >
          Adicionar ao Carrinho
        </button>
      </article>
    );
  }
}