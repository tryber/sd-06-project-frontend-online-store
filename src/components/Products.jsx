import React from 'react';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <main className="products-list">
        <h4 className="section-title">Produtos:</h4>
        <div className="product-items">
          {(!data)
            ? 'Nenhum produto foi encontrado'
            : data.results.map((product) => <Product key={product.id} data={product} />)}
        </div>
      </main>
    );
  }
}

export default Products;
