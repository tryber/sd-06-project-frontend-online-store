import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import * as api from './services/api';

api.getCategories().then(categories => { console.log(categories) })

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
