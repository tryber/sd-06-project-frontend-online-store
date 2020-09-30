import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addCart from '../addCart.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <div>
          <Link data-testid="shopping-cart-button" to="/Cart">
            <img src={ addCart } alt="button car shopping" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
