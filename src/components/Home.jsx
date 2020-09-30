
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';


class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Categories />
        <button>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
export default Home;
