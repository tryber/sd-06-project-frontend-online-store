import React from 'react';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAPI = this.handleAPI.bind(this);


    this.state = {
      search: '',
      products: [],
    };
  }


  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleAPI() {
    const { products, search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search)
    console.log(result);
    console.log(search);
    this.setState({
      [products]: result,
    });
  }

  render() {
    const { search } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <input
            data-testid="query-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChanges }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleAPI }
          >
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
