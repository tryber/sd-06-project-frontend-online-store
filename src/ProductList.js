import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from './services/api';

import Product from './Product';

class ProductList extends Component {
  constructor() {
    super();

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      valueInput: '',
      products: [],
      category: '',
    };
  }

  handleInput(event) {
    const input = event.target.value;
    this.setState({ valueInput: input });
  }

  async fetchProducts() {
    const { valueInput, category } = this.state;
    const getCategories = await getProductsFromCategoryAndQuery(category, valueInput);
    const { results } = getCategories;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <input
          id="teste"
          data-testid="query-input"
          type="text"
          onChange={ this.handleInput }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => this.fetchProducts() }
        >
          Enviar
        </button>
        <div>
          { products.map((prod) => <Product product={ prod } key={ prod.id } />) }
        </div>
      </div>
    );
  }
}

export default ProductList;
