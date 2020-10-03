import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import CardDetails from './pages/CardDetails';


class App extends Component {
  constructor() {
    super()

    this.addProductToCart = this.addProductToCart.bind(this);

    this.state = {
      addedProducts: 0,
    }
  }

  addProductToCart(product, quantityBrought) {
    this.setState((currentState) => ({
      addedProducts: [
        {...currentState.addedProducts},
        {[product]: quantityBrought},
      ]
    }))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/card/:id" render={(props) => <CardDetails {...props} addProductToCart = {this.addProductToCart} />} />
          <Route path="/cart" component={ Cart } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
