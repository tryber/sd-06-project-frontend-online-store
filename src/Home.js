import React from 'react';

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
    </main>
  );
}

export default Home;
