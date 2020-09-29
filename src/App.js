import React from 'react';
import './App.css';
import * as API from './services/api';

function App() {
  return (
    <div>
      <div>{API.getCategories()}</div>
      <div>{API.getProductsFromCategoryAndQuery()}</div>
    </div>

  );
}

export default App;
