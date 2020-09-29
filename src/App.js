import React from 'react';
import './App.css';
import * as API from './services/api';

function App() {
  return (
    <div data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma
      categoria.
    </div>

  );
}

export default App;
