import React from 'react';

function Home() {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
      />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}

export default Home;
