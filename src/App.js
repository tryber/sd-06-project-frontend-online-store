import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/ProductDetails" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
