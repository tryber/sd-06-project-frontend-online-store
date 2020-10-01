import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ ShoppingCart } />
            <Route path="/productdetail" component={ ProductDetail } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
