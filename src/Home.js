import React from 'react';
import ListCategories from './ListCategories';

function Home() {
  return (
    <main>
      <label
        htmlFor="input-message"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input id="input-message" />
      </label>
      <div>
        <ListCategories />
      </div>
    </main>
  );
}

export default Home;
