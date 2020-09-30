import React from 'react';
import * as api from '../services/api';

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
        <h4 className="products-title">Produtos:</h4>
        <div>
          {(data) ? console.log(data.results) : null}
          {/* {(data.results === null)
            ? 'Loading...'
            : data.results.map((product) => console.log(product))} */}
        </div>
      </main>
    );
  }
}

export default Products;
