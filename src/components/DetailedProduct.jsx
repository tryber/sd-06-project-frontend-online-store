import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CalcShipping, FreeShipping } from '.';

export default class DetailedProduct extends Component {
  render() {
    const { cartProducts, product, quantity, details } = this.props;
    const { title, price, thumbnail, attributes, id, shipping } = product;

    return (
      <div data-testid="product">
        <div
          data-testid="shopping-cart-product-name"
          onClick={this.props.openDetails}
        >{title}</div>
        <div>{price}</div>
        <img
          src={thumbnail}
          alt={title}
          onClick={this.props.openDetails}
        />
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
          details
            ? attributes.map(({ name, value_name: valueName, productId }) => (
              <p key={productId}>{`${name}: ${valueName}`}</p>
            ))
            : <> </>
        }
        {
          shipping.free_shipping
          ? <FreeShipping />
          : <CalcShipping />
        }
      </div>
    );
  }
}
