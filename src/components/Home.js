import React from 'react';
import Categories from './Categories';
import { Link } from 'react-router-dom';
import Cart from '../images/shopping-cart.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Categories />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ Cart } alt="shopping cart"/>
        </Link>
      </div>
    );
  }
}

export default Home;
