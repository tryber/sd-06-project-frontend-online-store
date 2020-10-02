import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ CartPage } />
        <Route path="/details/:id" component={ ProductDetails } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
