import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        Product List
        {products.map((element) => (
          <ProductCard product={element} key={element.id} />
        ))}
      </div >
    );
  }
}
