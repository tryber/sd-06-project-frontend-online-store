import React from 'react';

function Home() {
  return (
    <main>
      <label
        htmlFor="query-input"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          data-testid="query-input"
        />
      </label>
    </main>
  );
}

export default Home;
