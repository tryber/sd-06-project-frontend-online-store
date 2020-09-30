import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCartPage } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }

export default App;
