import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
