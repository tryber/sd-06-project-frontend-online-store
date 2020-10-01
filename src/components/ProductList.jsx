import React from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends React.Component {

  noProducts() {
    return(
      <div>Nenhum produto foi encontrado</div>
    )
  }

  render() {
    const { products, emptyList } = this.props;
    return (
      <div>
        { emptyList
          ? this.noProducts()
          : products.map((product) => <ProductCard key={product.id} product={product} />) 
      }
      </div>
    )
  }
}
