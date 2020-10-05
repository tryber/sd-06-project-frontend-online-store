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

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(newProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.concat(newProduct),
    }
    ));
  }

  render() {
    const { cartProducts } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/EmptyCart" component={ EmptyCart } />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.handleAddProduct } /> }
          />
          <Route
            path="/ProductDetails/:id"
            render={ (props) => <ProductDetails { ...props } cartProducts={ cartProducts } /> }
          />
          <Route
            path="/ShoppingCart"
            render={ (props) => <ShoppingCart { ...props } addToCart={ this.handleAddProduct } cartProducts={ cartProducts } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
