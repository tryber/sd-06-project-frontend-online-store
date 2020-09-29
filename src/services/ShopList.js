import React from 'react';
import { Link } from 'react-router-dom';

class ShopList extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default ShopList;
