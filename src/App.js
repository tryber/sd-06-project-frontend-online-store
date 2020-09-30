import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './services/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import CategoryDisplay from './components/CategoryDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CategoryDisplay />
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
