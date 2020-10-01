import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shopping-cart">
            <button data-testid="shopping-cart-button" type="button">
              Cart
            </button>
          </Link>
        </header>
        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}

export default HomePage;
