import React from 'react';
import ListCategories from './components/ListCategories';

function PagInicial() {
  return (
    <div data-testid="home-initial-message">
      <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      <section>
        <ListCategories />
      </section>
    </div>
  );
}

export default PagInicial;
