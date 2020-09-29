import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as API from './services/api.js';

function App() {
  return (
    <div>
      <div>{API.getCategories()}</div>
      <div>{API.getProductsFromCategoryAndQuery()}</div>
    </div>

  );
}

export default App;
