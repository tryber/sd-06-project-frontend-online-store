import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './services/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchBar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
