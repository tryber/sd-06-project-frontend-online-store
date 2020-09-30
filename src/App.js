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
            <Route exact path="/" component={ Home } />
            <Route path="/carrinho" component={ ShoppingCart } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
