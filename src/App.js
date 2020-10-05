import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCartPage from './pages/ShoppingCartPage';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/details/:productId"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/shopping-cart" component={ ShoppingCartPage } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
