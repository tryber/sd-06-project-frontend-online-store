import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
// import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = { cartItems: [] };
  }

  handleAddToCart(product) {
    const { cartItems } = this.state;
    this.setState({ cartItems: [...cartItems, product] });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home addToCart={ this.handleAddToCart } />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <ShoppingCart { ...props } cartItems={ cartItems } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
