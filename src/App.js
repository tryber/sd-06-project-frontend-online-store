import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.cartAdd = this.cartAdd.bind(this);
    this.state = {
      cart: [],
    };
  }

  cartAdd(product) {
    const { cart } = this.state;
    this.setState(({ cart: [...cart, product] }));
    return cart.length;
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart"
            render={ (props) => <CartPage { ...props } cartItems={ cart } /> }
          />
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetails { ...props } cartAdd={ this.cartAdd } /> }
          />
          <Route
            path="/"
            render={ (props) => <HomePage { ...props } cartAdd={ this.cartAdd } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
