import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaDeProdutos from './Pages/ListaDeProdutos';

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
