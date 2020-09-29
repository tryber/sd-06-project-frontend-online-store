import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagInicial from './PagInicial';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ PagInicial } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
