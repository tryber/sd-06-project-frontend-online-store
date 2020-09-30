import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './pages/ItemList';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <ItemList />
      <BrowserRouter>
        <Switch>
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
