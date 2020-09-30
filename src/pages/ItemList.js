import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ItemList extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <input data-testid="" type="text" />
        <Link to="/Cart">
          <button type="button" data-testid="shopping-cart-button">
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}

export default ItemList;
