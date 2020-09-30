import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    );
  }
}
export default Routes;
