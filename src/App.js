import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmptyProductList from './page/EmptyProductList';
import ShoppingCart from './page/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ EmptyProductList } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
