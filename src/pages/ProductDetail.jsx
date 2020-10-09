import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductEvaluations from '../components/ProductEvaluations';

export default class ProductDetail extends Component {
  handleClick(productObject) {
    this.props.location.updateCart(productObject);
  }

  render() {
    const { title, price, thumbnail, available_quantity } = this.props.location.product;
    const { shipping } = this.props.location.product;
    const freeShipping = shipping.free_shipping;

    return (
      <div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div className="product-details">
          <div className="product-main">
            <h4 data-testid="product-detail-name">
              { title }
              - R$
              { price }
            </h4>
            {freeShipping && <span data-testid="free-shipping">Frete Gratis</span>}
            <img src={ thumbnail } alt="Thumbnail" />
          </div>
          <div>
            <h4>Especificações técnicas</h4>
            <p>
              Quantidade disponível:
              { available_quantity }
            </p>
          </div>
        </div>
        <div>
          <Link
            to={ { pathname: '/',
              product: this.props.location.product
            } }
            data-testid="product-detail-add-to-cart"
          >
            add to cart
          </Link>
          <ProductEvaluations product={ this.props.location.product } />
        </div>
      </div>
    );
  }
}
