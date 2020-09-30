import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
        <Route exact path="/" component={ProductListing} />
        <Route
          exact path="/products/:category_id/:id"
          render={ (props) => <ProductDetails { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}
