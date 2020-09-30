import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ProductList:id" component={ProductList} />
        <Route path="/Cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
