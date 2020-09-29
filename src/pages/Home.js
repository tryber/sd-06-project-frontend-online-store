import React from 'react';

function Home() {
  return (
    <div>
      <form>
        <input type="text" name="research" />
      </form>
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}

export default Home;
