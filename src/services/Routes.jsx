import React from 'react';
import { Switch, Route } from 'react-router';

import Header from '../pages/Header.js';
import Cart from '../pages/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Header } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    );
  }
}
export default Routes;
