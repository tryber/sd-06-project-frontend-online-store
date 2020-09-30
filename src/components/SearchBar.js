import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';

const SearchBar = () => (
  <div>
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
    <form>
      <input />
    </form>
  <ShoppingCartButton />
  </div>
);

export default SearchBar;
