import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SearchProduct from './pages/SearchProduct';


function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={SearchProduct}/>    
    </BrowserRouter>
  );
}

export default App;
