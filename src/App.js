import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" component={ Cart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
