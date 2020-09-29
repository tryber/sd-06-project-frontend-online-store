<<<<<<< HEAD
import React from 'react' ;
import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaDeProdutos from './Pages/ListaDeProdutos';
>>>>>>> f6e427bb60bdd03957ec80af2693a8e1d3e84c04

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListaDeProdutos } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// teste