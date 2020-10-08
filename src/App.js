import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';
import ShoppingCartPage from './ShoppingCartPage';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/shoppingcart" component={ ShoppingCartPage } />
          <Route path="/productdetails/:id/" component={ ProductDetails } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
