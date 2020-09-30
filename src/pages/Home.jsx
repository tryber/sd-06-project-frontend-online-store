import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from './../img/cart.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="search-input" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button"><img src={ cart } alt="imagem cart" width="30px"/></Link>
      </div>
    );
  }
}
