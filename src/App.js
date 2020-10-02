import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EmptyCart from './pages/EmptyCart';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/EmptyCart" component={ EmptyCart } />
          <Route exact path="/" component={ Home } />
          <Route path="/ProductDetails/:id" component={ ProductDetails } />
          <Route path="/ShoppingCart/:id" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
