import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './services/Routes';
import Categories from './components/Categories';


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
