import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import EmptyCart from './pages/EmptyCart';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cartProducts: [] };
  }

  handleAddProduct() {
    console.log('click');
  }

  render() {
    const { cartProducts } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/EmptyCart" component={ EmptyCart } />
          <Route exact path="/" component={ Home } />
          <Route path="/ProductDetails/:id" component={ ProductDetails } addToCart={ this.handleAddProduct } cartProducts={ cartProducts } />
          <Route path="/ShoppingCart/:id" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
