import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import ProductCard from './ProductCard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/product-card" component={ ProductCard } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
