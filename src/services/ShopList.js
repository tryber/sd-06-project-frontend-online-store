import React from 'react';
import { Link } from 'react-router-dom';

class ShopList extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        Digite algum termo de pesquisa ou escolha uma categoria.
        <button type="button" data-testid="shopping-cart-button">
          <Link to="/cart">Carrinho</Link>
        </button>
      </div>
    );
  }
}

export default ShopList;
