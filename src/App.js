import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import ShoppingCart from './pages/ShoppingCart';
import CardDetail from './pages/CardDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route
            exact
            path="/carddetail"
            render={ (props) => <CardDetail { ...props } /> }
          />
          <Route exact path="/" component={ Homepage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
