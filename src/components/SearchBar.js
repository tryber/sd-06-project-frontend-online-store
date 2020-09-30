import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';

const SearchBar = () => (
  <div>
    <form>
      <input />
    </form>
    <ShoppingCartButton />
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  </div>
);

export default SearchBar;
