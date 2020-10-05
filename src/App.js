import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cartItems: [],
    };
  }

  async addToCart(item) {
    await this.setState((previousState) => ({
      cartItems: previousState.cartItems.concat(item),
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ () => <ProductList addToCart={ this.addToCart } /> }
          />
          <Route path="/cart" component={ () => <Cart cartItems={ cartItems } /> } />
          <Route path="/product-details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
