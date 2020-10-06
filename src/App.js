import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import CardDetails from './pages/CardDetails';


class App extends Component {
  constructor() {
    super();

    this.addTocart = this.addTocart.bind(this);

    this.state = {
      addToCart: {},
    };
  }


  addTocart(productName) {
    console.log('função sendo chamada');
    const zero = 0;
    this.setState((currentState) => ({
      addToCart: {
        ...currentState.addToCart,
        [productName]: (currentState.addToCart[productName] || zero) + 1,
      },
    }));
  }

  render() {
    const { addToCart } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } addToCart={ this.addTocart } /> }
          />
          <Route path="/card/:id" component={ CardDetails } />
          <Route
            exact
            path="/cart"
            render={ (props) => <Cart { ...props } productsAddToCart={ addToCart } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
