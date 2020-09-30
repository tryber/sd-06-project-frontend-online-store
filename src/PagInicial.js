import React from 'react';
import { Link } from 'react-router-dom';

function PagInicial() {
  return (
    <div data-testid="home-initial-message">
      <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      <Link to="/CarrinhoCompras" data-testid="shopping-cart-button">
        <button type="button">Carrinho de Compras</button>
      </Link>
    </div>
  );
}

export default PagInicial;
