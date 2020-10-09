import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faBars,
  faShoppingCart,
  faSearch, 
  faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { ShopList, ShopCart, ProductDetails, Checkout } from './pages';

import './App.css';
import './App.scss';

library.add(faCoffee, faBars, faShoppingCart, faSearch, faTimesCircle);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ShopList } />
        <Route exact path="/cart" component={ ShopCart } />
        <Route
          exact
          path="/productDetails/:id"
          component={ ProductDetails }
        />
        <Route exact path="/checkout" component={ Checkout } />
      </BrowserRouter>
    );
  }
}

export default App;
