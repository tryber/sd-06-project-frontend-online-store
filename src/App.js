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
    this.state = { cartProducts: [], cartQuantity: 0 };

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(newProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.concat(newProduct),
      cartQuantity: state.cartQuantity + 1,
    }
    ));
  }

  render() {
    const { cartProducts, cartQuantity } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/EmptyCart" component={ EmptyCart } />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              addToCart={ this.handleAddProduct }
            />) }
          />
          <Route
            path="/ProductDetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addToCart={ this.handleAddProduct }
              cartProducts={ cartProducts }
            />) }
          />
          <Route
            path="/ShoppingCart"
            render={ (props) => (<ShoppingCart
              { ...props }
              addToCart={ this.handleAddProduct }
              cartProducts={ cartProducts }
              cartQuantity={ cartQuantity }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
