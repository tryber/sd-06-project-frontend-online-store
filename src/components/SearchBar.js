import React from 'react';
import ProductList from './productList';

const SearchBar = () => (
  <div>
    <form>
      <input placeholder="Search..."/>
    </form>
    <ProductList />
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  </div>
);

export default SearchBar;
