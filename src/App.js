import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import SearchEngine from './pages/SearchEngine';
import ShoppingCartPage from './pages/ShoppingCartPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCartPage } />
          <Route path="/" component={ SearchEngine } exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
