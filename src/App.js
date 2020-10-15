import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main, Cart, ProductDetails } from './pages';
import Checkout from './pages/Checkout';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/Cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/products/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
