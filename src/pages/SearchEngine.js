import React from 'react';

import ShoppingCartButton from '../component/ShoppingCartButton';

function SearchEngine() {
  return (
    <div>
      <input type="text" />
      <ShoppingCartButton />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}


export default SearchEngine;
