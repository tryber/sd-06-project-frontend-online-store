import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import ShoppingCartButton from './components/ShoppingCartButton';
import CartEmptyMessage from './components/Cart';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ SearchBar } />
            <Route path="/" component={ ShoppingCartButton } />
            <Route exact path="/" component={ ShoppingCartButton } />
            <Route path="/Cart" component={ CartEmptyMessage } />
          </Switch>
          <ShoppingCartButton />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
