import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductListing from './components/ProductListing';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductListing } />
      </Switch>
    </BrowserRouter>
  );
}
