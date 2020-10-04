import React from 'react';

export default class ProductCard extends React.Component {
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
        <div>{title}</div>
        <div>{price}</div>
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