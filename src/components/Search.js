import React, { Component } from 'react'


class Search extends Component {
  render() {
    return (
      <div className="container">
        <form className="searchForm">
          <input 
            type="text"
            data-testid="home-initial"
            className="home-initial-message"  
            placeholder="Digite aqui o termo da sua busca"
            required="required"
          />
          <label data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </form>
      </div>
    );
  }
}

export default Search;