import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
<<<<<<< HEAD
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        {/* teste */}
      </p>
      // teste
=======
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
>>>>>>> cd651fe5a38d32b3dc63860b2a5e2698fb0f80d7
    );
  }
}

export default HomePage;
