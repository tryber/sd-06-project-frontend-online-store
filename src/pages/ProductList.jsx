import React from 'react';
import ProductCard from './ProductCard'

class ProductList extends React.Component {
  render () {
    const { products } = this.props;
    return (
      <div className="product-list-container">

        {/* Render list of products */}
        {products.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
    );
  }
}

export default ProductList;