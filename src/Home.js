import React from 'react';
import ShoppingCartButton from './components/ShoppingCartButton';

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
      <ShoppingCartButton />
    </main>
  );
}

export default Home;
