import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import ShoppingCartButton from './components/ShoppingCartButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/product/:id" component={ ProductDetail } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/shoppingcartbutton" component={ ShoppingCartButton } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
