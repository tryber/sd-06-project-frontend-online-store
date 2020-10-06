import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmptyProductList from './page/EmptyProductList';
import ShoppingCart from './page/ShoppingCart';

// render={ (props) => (<ShoppingCart
//   { ...props }
//   addToCart={ this.handleAddProduct }
//   cartProducts={ cartProducts }
//   cartQuantity={ cartQuantity }
// />) }

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ EmptyProductList } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
