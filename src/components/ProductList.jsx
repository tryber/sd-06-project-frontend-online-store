import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

export default class ProductList extends React.Component {

  noProducts() {
    return(
      <div>Nenhum produto foi encontrado</div>
    )
  }

  render() {
    const { products, emptyList } = this.props;
    return (
      <section>
        { emptyList
          ? this.noProducts()
          : products.map((product) => <ProductCard key={product.id} product={product} />) 
        }
      </section>
    );
  }
}
