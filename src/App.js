import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
