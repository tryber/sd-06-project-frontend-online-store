import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
