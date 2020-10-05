import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/cart" component={ ShoppingCart } />
      <Route path="/productdetails/:id" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
