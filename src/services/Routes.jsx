import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../Pages/Home.js';

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    )
  }
}
export default Routes; 
