import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
