import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';
// import * as api from './services/api';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
