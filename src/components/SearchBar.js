import React from 'react';
import ShoppingCartButton from './btn_cart';
import ProductList from './productList';

const SearchBar = () => (
  <div>
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
    <form>
      <input />
    </form>
    <ProductList />
    <ShoppingCartButton />
  </div>
);

export default SearchBar;
