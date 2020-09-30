import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SearchProduct from './pages/SearchProduct';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route exact path="/" component={ SearchProduct } />
      <Route path="/products/:id" component={ ProductDetail } />
    </BrowserRouter>
  );
}

export default App;
