import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import SearchEngine from './pages/SearchEngine';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ SearchEngine } />
      </Router>
    );
  }
}

export default App;
