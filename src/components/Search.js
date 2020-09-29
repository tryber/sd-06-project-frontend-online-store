import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Search extends Component {
  render() {
    return (
      <div className="container">
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
          <button data-testid='shopping-cart-button'><Link to="/ShoppingCart">Carrinho de compras</Link></button>
        </form>
      </div>
    );
  }
}

export default Search;
