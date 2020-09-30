import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <input type="text" data-testid="query-input" />
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <Categories />
      </div>
    );
  }
}

export default HomePage;
