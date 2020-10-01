import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route
          path="/productdetails/:query/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
