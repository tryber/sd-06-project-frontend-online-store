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
      productsAddToCart: {},
    };
  }


  addTocart(productName) {
    console.log('função sendo chamada');
    const zero = 0;
    this.setState((currentState) => ({
      productsAddToCart: {
        ...currentState.productsAddToCart,
        [productName]: (currentState.productsAddToCart[productName] || zero) + 1,
      },
    }));
  }

  render() {
    const { productsAddToCart } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exactpath="/"
            render={ (props) => <Home { ...props } addToCart={ this.addTocart } /> }
            />
          <Route path="/card/:id" component={ CardDetails } />
          <Route 
            exact path="/cart" 
            render={ (props) => <Cart { ...props } productsAddToCart={ productsAddToCart } /> }
            />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
