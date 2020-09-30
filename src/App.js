import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={ SearchBar } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
