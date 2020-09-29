import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Carrinho from '../imgs/carrinho.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div data-testid="home-initial-message" className="search-bar">
          <input
            type="text"
            className="home-input"
          // onKeyUp={ (event) => event.keyCode === 13 ? console.log('evento funcionando') : '' }
          />
          <Link to="/shopping-cart">
            <img data-testid="shopping-cart-button" src={ Carrinho } alt="Carrinho" />
          </Link>
        </div>
        <span className="home-span">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    );
  }
}

export default Home;
