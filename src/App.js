import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.state = {
      carrinho: [],
    };
  }

  addItem(item) {
    this.setState((previousState) => (
      { carrinho: [...previousState.carrinho, item] }
    ));
  }

  render() {
    const { carrinho } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <ItemList addItem={ this.addItem } /> }
            />
            <Route
              path="/Cart"
              render={ (props) => <Cart carrinho={ carrinho } { ...props } /> }
            />
            <Route
              path="/ProductDetails/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


/* function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ItemList } />
          <Route path="/Cart" component={ Cart } />
          <Route
            path="/ProductDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
} */

export default App;
