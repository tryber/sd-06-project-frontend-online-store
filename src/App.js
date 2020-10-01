import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/product-details/:product"
          render={ (props) => ProductDetails(props) }
        />
        <Route path="/cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
