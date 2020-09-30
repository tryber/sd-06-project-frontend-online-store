import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
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
            <Route exact path="/" component={ SearchBar } />
            <Route path="/Cart" component={ CartEmptyMessage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
