import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCart';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItem: [],
      cartCount: '0',
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(productName, productId) {
    this.setState((prevState) => ({
      cartItem: prevState.cartItem.concat({ name: productName, id: productId }),
      cartCount: (Number(prevState.cartCount) + 1).toString(),
    }));
  }

  render() {
    const { cartCount, cartItem } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ (props) => (<HomePage
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
        <Route
          exact
          path="/cart"
          render={ (props) => (<ShoppingCart
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
        <Route
          exact
          path="/productlist"
          render={ (props) => (<ProductList
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
        <Route
          exact
          path="/products/:id"
          render={ (props) => (<ProductDetails
            { ...props }
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
          />) }
        />
      </BrowserRouter>
    );
  }
}
export default App;
