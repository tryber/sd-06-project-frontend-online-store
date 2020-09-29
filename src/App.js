import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ CartPage } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
