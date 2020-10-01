import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaDeProdutos from './Pages/ListaDeProdutos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><ListaDeProdutos /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
