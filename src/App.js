import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ItemList } />
          <Route path="/Cart" component={ Cart } />
          <Route path="/ProductDetails" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
