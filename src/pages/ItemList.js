import React from 'react';

function ItemList() {
  return (
    <div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <a href="/cart">
        <button
          data-testid="shopping-cart-button"
          type="button"
        >
          Carrinho
        </button>
      </a>
    </div>
  );
}

export default ItemList;
