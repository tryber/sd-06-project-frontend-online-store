import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/cart" component={ ShoppingCart } />
        <Route exact path="/products/:id" component={ ProductDetails } />
      </BrowserRouter>
    );
  }
}

export default App;
