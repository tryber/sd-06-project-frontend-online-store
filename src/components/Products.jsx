import React from 'react';
import * as api from '../services/api';
import Product from './Product';

class Products extends React.Component {
  constructor() {
    super();

    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchProducts('violão');
  }

  async fetchProducts(query) {
    const fetchData = await api.getProductsFromCategoryAndQuery({ query });
    this.setState({ data: fetchData });
  }

  render() {
    const { data } = this.state;
    return (
      <main className="products-list">
        <h4 className="section-title">Produtos:</h4>
        <div className="product-items">
          {/* {(data) ? console.log(data.results) : null} */}
          {(!data)
            ? 'Loading...'
            : data.results.map((product) => <Product key={product.id} data={product} />)}
        </div>
      </main>
    );
  }
}

export default Products;
