import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmptyProductList from './component/EmptyProductList';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={EmptyProductList} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
