import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShopList, ShopCart } from './pages';
import './App.css';

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
