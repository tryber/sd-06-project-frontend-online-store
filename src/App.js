import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';


export default class App extends Component {
  constructor() {
    super();
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      cartList: [],
      cartQuantity: 0,
    };
  }

  handleAddToCart(currentProduct) {
    const { cartQuantity, cartList } = this.state;
    this.setState({ cartQuantity: cartQuantity + 1 });
    const zero = 0;
    if (cartList.length > zero) {
      const couldFindIt = cartList.find((product) => currentProduct.id === product.id);
      if (couldFindIt) {
        const quantityUpdated = cartList.map((product) => {
          if (product.id === currentProduct.id) {
            product.quantityInCart += 1;
            return product;
          }
          return product;
        });
        this.setState({ cartList: quantityUpdated });
      } else {
        currentProduct.quantityInCart = 1;
        this.setState({ cartList: [...cartList, currentProduct] });
      }
    } else {
      currentProduct.quantityInCart = 1;
      this.setState({ cartList: [currentProduct] });
    }
  }

  render() {
    const { cartList, cartQuantity } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/ShoppingCart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                cartList={ cartList }
                cartQuantity={ cartQuantity }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <ProductListing
                { ...props }
                cartList={ cartList }
                cartQuantity={ cartQuantity }
                handleAddToCart={ this.handleAddToCart }
              />
            ) }
          />
          <Route
            exact
            path="/products/:category_id/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                handleAddToCart={ this.handleAddToCart }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
