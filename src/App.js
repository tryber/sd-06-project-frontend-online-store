import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShopList, ShopCart, ProductDetails, Checkout } from './pages';
import './App.css';
import './App.scss';

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
