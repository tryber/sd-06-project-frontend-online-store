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
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
  }

  handleAddProduct(newProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.some(
        (product) => product.id === newProduct.id,
      )
        ? state.cartProducts.map((product) => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        })
        : [...state.cartProducts, { ...newProduct, quantity: 1 }],
    }
    ));
  }

  handleDecreaseQuantity() {
    console.log('click');
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
            render={ (props) => (<Home
              { ...props }
              addToCart={ this.handleAddProduct }
              subtractFromCart={ this.handleDecreaseQuantity }
            />) }
          />
          <Route
            path="/ProductDetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addToCart={ this.handleAddProduct }
              subtractFromCart={ this.handleDecreaseQuantity }
              cartProducts={ cartProducts }
            />) }
          />
          <Route
            path="/ShoppingCart"
            render={ (props) => (<ShoppingCart
              { ...props }
              addToCart={ this.handleAddProduct }
              subtractFromCart={ this.handleDecreaseQuantity }
              cartProducts={ cartProducts }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
