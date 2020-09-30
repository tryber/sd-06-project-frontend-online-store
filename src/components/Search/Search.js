import React, { Component } from 'react';
import Category from '../../Category';

class Search extends Component {
  render() {
    return (
      <div className="container">
        <Category />
        <form className="searchForm">
          <input
            id="home-initial-message"
            type="text"
            data-testid="home-initial"
            className="home-initial-message"
            placeholder="Digite aqui o termo da sua busca"
            required="required"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </form>
      </div>
    );
  }
}

export default Search;
