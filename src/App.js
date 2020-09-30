import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import CategoriesSideBar from './components/CategoriesSideBar';
import CardDetails from './pages/CardDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <CategoriesSideBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/card/:id" component={ CardDetails } />
          <Route path="/Cart" component={ Cart } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
