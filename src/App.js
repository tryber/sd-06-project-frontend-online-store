import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCartPage from './pages/ShoppingCartPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProductList: [],
      cartProductItens: 0,
    };
    this.updateCartListAndItens = this.updateCartListAndItens.bind(this);
  }

  updateCartListAndItens(newProduct) {
    const { cartProductList, cartProductItens } = this.state;
    this.setState({
      cartProductList: [...cartProductList, newProduct],
      cartProductItens: cartProductItens + 1,
    });
  }

  render() {
    const { cartProductList, cartProductItens } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/details/:productId"
            render={ (props) => (
              <ProductDetails
                { ...props }
                updateCartListAndItens={ this.updateCartListAndItens }
                cartProductList={ cartProductList }
                cartProductItens={ cartProductItens }
              />
            ) }
          />
          <Route path="/shopping-cart" component={ ShoppingCartPage } />
          <Route
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                updateCartListAndItens={ this.updateCartListAndItens }
                cartProductList={ cartProductList }
                cartProductItens={ cartProductItens }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
