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
    this.state = {
      cartItems: [],
      addedItems: {},
    };
  }

  handleAddToCart(product) {
    const { cartItems, addedItems } = this.state;
    if (Object.keys(addedItems).includes(product.id)) {
      addedItems[`${product.id}`] += 1;
      this.setState({ addedItems });
    } else {
      addedItems[`${product.id}`] = 1;
      this.setState({
        cartItems: [...cartItems, product],
        addedItems,
      });
    }
  }

  render() {
    const { cartItems, addedItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home { ...props } addToCart={ this.handleAddToCart } />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <ShoppingCart { ...props } cartItems={ cartItems } addedItems={ addedItems } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
