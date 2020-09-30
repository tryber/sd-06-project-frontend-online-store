import React from 'react';

import * as api from '../services/api';

class SearchEngine extends React.Component {
  constructor() {
    super();

    this.state = {
      foundItems: false,
      categoryInput: '',
      queryInput: '',
      products: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ queryInput: target.value });
  }

  async handleClick() {
    const { categoryInput, queryInput } = this.state;
    this.setState({ foundItems: true }, async () => {
      this.setState({
        products: await api.getProductsFromCategoryAndQuery(
          categoryInput,
          queryInput,
        ),
      });
    });
  }

  render() {
    const { foundItems, queryInput, products } = this.state;
    const zero = 0;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="queryInput"
          value={ queryInput }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {queryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {queryInput !== '' && !foundItems && (
          <p data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </p>
        )}
        {Object.keys(products).length === zero ? (
          <p data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </p>
        ) : (
          products.results.map((prod) => (
            <p data-testid="product" key={ prod.title }>
              Produto:
              {prod.title}
            </p>
          ))
        )}
      </div>
    );
  }
}

export default SearchEngine;
