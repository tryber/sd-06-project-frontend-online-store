import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ItemList extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/Cart">
          <botton data-testid="shopping-cart-button">
            Carrinho
          </botton>
        </Link>
      </div>
    );
  }
}

export default ItemList;
