import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { homeList, shoppingCart } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ homeList } />
          <Route exact path="/cart" component={ shoppingCart } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
