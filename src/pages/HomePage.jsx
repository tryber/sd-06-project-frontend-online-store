import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    );
  }
}

export default HomePage;
