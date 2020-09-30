import React, { Component } from 'react';
import ShoppingCartButton from './components/ShoppingCartButton';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from './services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      isFail: false,
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
  }

  async handleClickSearchButton() {
    const { query } = this.state;
    const valueFromApi = await getProductsFromCategoryAndQuery('', query);
    const emptyArray = 0;
    if (valueFromApi.results.length === emptyArray) {
      this.setState({ isFail: true });
    } else {
      this.setState({
        products: valueFromApi.results,
        isFail: false,
      });
    }
  }

  handleInputSearchChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  render() {
    const { products, isFail } = this.state;
    return (
      <main>
        <label
          htmlFor="input-message"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="query"
            data-testid="query-input"
            onChange={ this.handleInputSearchChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClickSearchButton }
        >
          SEARCH
        </button>
        <ShoppingCartButton />
        <ProductCard products={ products } isFail={ isFail } />
      </main>
    );
  }
}

export default Home;
