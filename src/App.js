import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './services/api';

function App() {
  return (
    getCategories()
  );
}

export default App;
