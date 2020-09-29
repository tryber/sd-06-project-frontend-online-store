import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/PaginaInicial';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ HomePage } />
    </BrowserRouter>
  );
}

export default App;
