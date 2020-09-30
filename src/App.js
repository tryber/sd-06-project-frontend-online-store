import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './services/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import ProductList from './pages/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/ProductList" component={ ProductList } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
