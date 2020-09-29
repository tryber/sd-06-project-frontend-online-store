import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SearchProduct from './pages/SearchProduct';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/" component={ SearchProduct } />
    </BrowserRouter>
  );
}

export default App;
