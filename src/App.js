import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './services/Routes';
import Categories from './components/Categories';


function App() {
  return (
    <Router>
      <Routes />
      <Categories />
    </Router>
  );
}

export default App;
