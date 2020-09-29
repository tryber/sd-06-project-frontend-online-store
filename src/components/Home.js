import React from 'react';
import ShoppingCart from '../images/shopping-cart.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="shopping-cart-button"><img src={ShoppingCart} alt="shopping cart"/></button>
      </div>
    );
  }
}

export default Home;
