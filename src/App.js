import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };

    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart(product) {
    product.ammount += 1;
    if (product.ammount > 1) return;
    this.setState((prevState) => ({ cartList: [...prevState.cartList, product] }));
  }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/products/:id"
              render={ (props) => (
                <ProductsDetails
                  { ...props }
                  handleAddCart={ this.handleAddCart }
                />) }
            />
            <Route
              path="/shopping-cart"
              render={ () => <ShoppingCart cartList={ cartList } /> }
            />
            <Route
              path="/"
              render={ () => (
                <Home handleAddCart={ this.handleAddCart } />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
