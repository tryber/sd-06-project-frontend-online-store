import React from 'react';
import * as api from '../services/api';

function homeList() {
  console.log(api.getCategories());
  console.log(api
    .getProductsFromCategoryAndQuery('MLB1368', 'Arte, Papelaria e Armarinho'));
  return (
    <div>
      <input />
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    </div>
  );
}

export default homeList;
