import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ItemList />
        </div>

        <Switch>
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
