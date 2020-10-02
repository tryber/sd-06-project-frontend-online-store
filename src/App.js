import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/shoppingcart/:id" component={ ShoppingCart } />
=======
          <Route exact path="/product/:id" component={ ProductDetail } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
>>>>>>> 31ebb6c13eff8ddcc2ff0b712b9e05f634a62bed
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
