import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products, updateCart } = this.props;
    return (
      <div className="product-list">
        {products.map((element) => (
          <ProductCard
            product={element}
            key={element.id}
            updateCart={updateCart}
            cartProductList={ this.props.cartProductList }
        />
        ))}
      </div>
    );
  }
}
