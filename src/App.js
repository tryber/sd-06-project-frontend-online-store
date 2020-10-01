import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import CartEmptyMessage from './components/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/Cart" component={ CartEmptyMessage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
