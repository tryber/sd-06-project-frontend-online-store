import React, { Component } from 'react';
import ShoppingCartButton from './ShoppingCartButton';

export default class SearchBar extends Component {
  constructor() {
    super()

    this.getTextSearch = this.getTextSearch.bind(this);

    this.state = { inputText: '', }
  }

  getTextSearch({ target }) {
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { onClickSearch } = this.props;
    return (
      <div>
        <label htmlFor="input-text" data-testid="home-initial-message">
          <button data-testid="query-button" onClick={() => onClickSearch(this.state.inputText)}>Pesquisar</button>
          <input type="text" name="input-text" data-testid="query-input" onChange={this.getTextSearch} />
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>
      <ShoppingCartButton />
    </div>
  );
 }
}
