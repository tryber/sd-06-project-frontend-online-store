import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';
import ShoppingCartPage from './ShoppingCartPage';
// import * as api from './services/api';
class App extends React.Component {
  render() {
    // api.getCategories().then(categories => { console.log(categories) })
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
