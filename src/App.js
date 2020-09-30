import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PagInicial from './PagInicial';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PagInicial} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
