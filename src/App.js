import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmptyProductList from './page/EmptyProductList';
import ShoppingCart from './page/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cartProducts: [], cartQuantity: 0 };
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(newProduct) {
    this.setState((state) => ({
      cartProducts: state.cartProducts.concat(newProduct),
      cartQuantity: state.cartQuantity + 1,
    }));
  }

  render() {
    const { cartProducts, cartQuantity } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/" component={ EmptyProductList } />
            <Route
              path="/ShoppingCart"
              render={ (props) => (<ShoppingCart
                { ...props }
                addToCart={ this.handleAddProduct }
                cartProducts={ cartProducts }
                cartQuantity={ cartQuantity }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
