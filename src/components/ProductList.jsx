import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  noProducts() {
    return <div>Nenhum produto foi encontrado</div>;
  }

  render() {
    const { products, emptyList, callback } = this.props;

    return (
      <div>
        { 
          emptyList
            ? this.noProducts()
            : products.map((product) => {
              return <ProductCard key={product.id} product={product} callback={callback} />;
            })
        }
      </div>
    );
  }
}
