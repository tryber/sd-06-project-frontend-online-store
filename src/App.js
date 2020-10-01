import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShopList, ShopCart, ProductDetails } from './pages';

import './App.css';

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
      </BrowserRouter>
    );
  }
}

export default App;
