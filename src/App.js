import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ Homepage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
