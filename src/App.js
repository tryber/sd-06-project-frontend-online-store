import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/cart" component={ Cart } />
        <Route path="/product-details" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
