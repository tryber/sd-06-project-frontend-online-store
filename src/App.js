import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import CartEmptyMessage from './components/cart';

import './App.css';

function App() {
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

export default App;
