import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/products/:id" component={ ProductsDetails } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
