import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import CategoryListener from './CategoryListener';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/categoryListener" component={ CategoryListener } />
        </Switch>
        <CategoryListener />
      </BrowserRouter>

    );
  }
}

export default App;
