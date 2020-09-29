import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
