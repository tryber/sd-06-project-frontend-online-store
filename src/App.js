import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import homeList from './pages/homeList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ homeList } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
