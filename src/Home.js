import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from './services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      product: {},
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
  }

  handleInputSearchChange({ target }) {
    this.setState({ query: target.value });
  }

  render() {
    return (
      <main>
        <label
          htmlFor="query-input"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="query"
            onChange={ this.handleInputSearchChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          data-testeid="query-button"
          onClick={ this.handleClickSearchButton }
        >
          SEARCH
        </button>
      </main>
    );
  }
}

export default Home;
