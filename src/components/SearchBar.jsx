import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.getTextSearch = this.getTextSearch.bind(this);

    this.state = {
      inputText: '',
    };
  }

  getTextSearch({ target }) {
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { onClickSearch } = this.props;
    const { inputText } = this.state;

    return (
      <div>
        <label htmlFor="input-text" data-testid="home-initial-message">
          <button
            type="submit"
            data-testid="query-button"
            onClick={ () => onClickSearch(inputText) }
          >
            Pesquisar
          </button>
          <input
            type="text"
            name="input-text"
            data-testid="query-input"
            onChange={ this.getTextSearch }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}
