import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Cart" component={ Cart } />
        <Route path="/Product-details/:id" component={ ProductDetails } />
        <Route path="/" component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
