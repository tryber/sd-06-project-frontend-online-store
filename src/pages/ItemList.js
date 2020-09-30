import React from 'react';
import { Link } from 'react-router-dom';

function ItemList() {
  return (
    <div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <Link to="/Cart">
        <button
          data-testid="shopping-cart-button"
          type="button"
        >
          Carrinho
        </button>
      </Link>
    </div>
  );
}

export default ItemList;
