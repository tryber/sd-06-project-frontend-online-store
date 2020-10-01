import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';
import ShoppingCartPage from './ShoppingCartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/shoppingcart" component={ ShoppingCartPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
