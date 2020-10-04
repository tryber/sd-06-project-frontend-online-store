import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import ShoppingCart from './Pages/ShoppingCart'
import ProductDetails from './Pages/ProductDetails';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/productDetails" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
