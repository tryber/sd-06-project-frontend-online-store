import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <button data-testid="shopping-cart-button">Carrinho</button>
    </div>
  );
}

export default App;
