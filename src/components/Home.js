import React from 'react';
import ProductList from './ProductList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      ProductArray: [],
      inputQuery: 'query',
    };
  }

  async handleSearch() {
    const { inputQuery } = this.state;
    const resultApi = await api.getProductsFromCategoryAndQuery('categoryId', inputQuery);
    this.setState({ ProductArray: resultApi.results });
  }

  handleChange({ target }) {
    this.setState({ inputQuery: target.value });
  }

  render() {
    const { ProductArray } = this.state;
    return (
      <div>
        <input
          name="inputQuery"
          onChange={ this.handleChange }
          data-testid="query-input"
          type="text"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList products={ ProductArray } />
      </div>
    );
  }
}

export default Home;
