import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
