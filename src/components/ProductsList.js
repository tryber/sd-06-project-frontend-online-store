import React, { Component } from 'react';

import ProductCard from './ProductCard';

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    console.log(products) //! Console
    return (
      <ul className="productsList-container">
        {products.map((product) => <li key={product.id}><ProductCard product={product} /></li>)}
      </ul>
    );
  }
}

export default ProductsList;
