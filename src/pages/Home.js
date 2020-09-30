import React from 'react';
import Categories from '../components/Categories';

function Home() {
  return (
    <div>
      <Categories></Categories>
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