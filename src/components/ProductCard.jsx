import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  handleClick(productObject) {
    const { updateCart } = this.props;
    updateCart(productObject);
  }

  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail, shipping } = product;
    const freeShipping = shipping.free_shipping;

    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt="Thumbnail" />
        <h4>{ title }</h4>
        <h5>{ price }</h5>
        {freeShipping && <span data-testid="free-shipping">Frete Gratis</span>}
        <Link
          to={ { pathname: `/product/${id}`,
            product: this.props.product,
            updateCart: this.props.updateCart,
            cartProductList: this.props.cartProductList
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(product) }
        >
          add to cart
        </button>
      </div>
    );
  }
}
