import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import CardDetail from './pages/CardDetail';
import CheckOut from './pages/CheckOut';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route path="/CardDetail" component={ CardDetail } />
            <Route path="/CheckOut" component={ CheckOut } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
