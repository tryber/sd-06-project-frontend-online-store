import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.state = {
      carrinho: [],
    };
  }

  addItem(item) {
    const { carrinho } = this.state;
    const isAlreadyThere = carrinho.some((product) => product.id === item.id);
    if (isAlreadyThere) {
      const findProduct = carrinho.find((product) => product.id === item.id);
      const indexWanted = carrinho.indexOf(findProduct);
      this.setState((previousState) => {
        previousState.carrinho[indexWanted].quantity += 1;
        return { carrinho: previousState.carrinho };
      });
    } else {
      this.setState((previousState) => (
        { carrinho: [...previousState.carrinho, item] }
      ));
    }
  }

  updateItem(item, tag) {
    const { carrinho } = this.state;
    const indexWanted = carrinho.indexOf(item);
    const itemToBeUpdated = carrinho[indexWanted];
    if (tag) {
      itemToBeUpdated.quantity += 1;
      this.setState((previousState) => {
        previousState.carrinho.splice(indexWanted, 1, itemToBeUpdated);
        return { carrinho: previousState.carrinho };
      });
    } else {
      itemToBeUpdated.quantity -= 1;
      if (itemToBeUpdated.quantity) {
        this.setState((previousState) => {
          previousState.carrinho.splice(indexWanted, 1, itemToBeUpdated);
          return { carrinho: previousState.carrinho };
        });
      } else {
        this.setState((previousState) => {
          previousState.carrinho.splice(indexWanted, 1);
          return { carrinho: previousState.carrinho };
        });
      }
    }
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
              render={ (props) => (
                <Cart
                  updateItem={ this.updateItem }
                  carrinho={ carrinho }
                  { ...props }
                />
              ) }
            />
            <Route
              path="/ProductDetails/:id"
              render={ (props) => (<ProductDetails
                addItem={ this.addItem }
                { ...props }
              />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
