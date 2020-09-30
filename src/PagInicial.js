import React from 'react';
import { Link } from 'react-router-dom';

function PagInicial() {
  return (
    <div data-testid="home-initial-message">
      <label>
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input type="text" data-testid="query-input"></input>
      </label>
      <button type="button" data-testid="query-button"></button>
      <Link to="/CarrinhoCompras" data-testid="shopping-cart-button">
        <button type="button">Carrinho de Compras</button>
      </Link>
    </div>
  );
}

export default PagInicial;
