import React from 'react';
import Cart from '../images/shopping-cart.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="shopping-cart-button"><Link to="/shopping-cart"><img src={Cart} alt="shopping cart"/></Link></button>
      </div>
    );
  }
}

export default Home;
