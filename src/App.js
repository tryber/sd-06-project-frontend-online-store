import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import ProductList from './ProductList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
          <Route path="/product-list" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
