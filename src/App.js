import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super()
    this.cartAdd = this.cartAdd.bind(this);
    this.state = {
      cart: [],
    }
  }

  cartAdd(product) {
    console.log(product)
    this.setState({cart: [...this.state.cart, product]})
    return this.state.cart.length
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart" render={ (props) => <CartPage {...props} cartItems={this.state.cart}/>} />
          <Route path="/details/:id" render={ (props) => <ProductDetails {...props} cartAdd={this.cartAdd} /> } />
          <Route path="/" render={ (props) => <HomePage {...props} cartAdd={this.cartAdd} /> } />
        </Switch>
      </BrowserRouter>
    );
  } 
}

export default App;
