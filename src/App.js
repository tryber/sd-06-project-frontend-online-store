import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopList from './services/ShopList';
import ShopCart from './services/ShopCart';

import './App.css';
// import * as API from './services/api';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ShopList } />
        <Route exact path="/cart" component={ ShopCart } />
      </BrowserRouter>
    );
  }
}

export default App;
