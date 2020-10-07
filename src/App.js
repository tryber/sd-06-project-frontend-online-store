import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmptyProductList from './page/EmptyProductList';
import ShoppingCart from './page/ShoppingCart';
import ProductDetails from './page/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ EmptyProductList } />
            <Route
              path="/product-details/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
