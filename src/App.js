import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/carrinho" component={ ShoppingCart } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
