import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
