import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        {/* <input type="text" data-testid="query-input" /> */}
        <ProductsList />
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        <Categories />
      </div>
    );
  }
}

export default HomePage;
