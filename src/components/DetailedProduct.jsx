import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailedProduct extends Component {
  render() {
    const { cartProducts, product, quantity } = this.props;
    const { title, price, thumbnail, attributes, id } = product;

    return (
      <div data-testid="product">
        <div data-testid="shopping-cart-product-name">{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={title} />
        <div data-testid="shopping-cart-product-quantity">{quantity}</div>
        <Link
          to={{
            pathname: `/productDetails/${id}`,
            state: { cartProducts }
          }}
          data-testid="product-detail-link"
        >
          DETALHES
        </Link>
        {
          attributes.map(({ name, value_name: valueName, productId }) => (
            <p key={productId}>{`${name}: ${valueName}`}</p>
          ))
        }
      </div>
    );
  }
}
