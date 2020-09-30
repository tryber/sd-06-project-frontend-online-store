import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemList, Cart } from './pages/index';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path exact="/" component={ ItemList } />
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
