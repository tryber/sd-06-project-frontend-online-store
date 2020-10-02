import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    if (localStorage.getItem('productsOnCart') !== null) {
      sessionStorage.productsOnCart = localStorage.getItem('productsOnCart');
      localStorage.removeItem('productsOnCart');
    }
    const vfyStorageCart = sessionStorage.getItem('productsOnCart') !== null;
    this.state = {
      productsOnCart: (vfyStorageCart) ? JSON.parse(sessionStorage.productsOnCart) : [],
    };
    this.handleState = this.handleState.bind(this);
    this.saveCart = this.saveCart.bind(this);
    this.setupBeforeUnloadListener = this.setupBeforeUnloadListener.bind(this);
  }

  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }

  // Implementation learned from StackOverflow and adapted to our application
  // The objective is to save the products on cart on localStorage to recover after
  // https://stackoverflow.com/questions/36355093/reactjs-browser-tab-close-event/53865567
  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener() {
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      return this.saveCart();
    });
  }

  saveCart() {
    const { productsOnCart } = this.state;
    localStorage.productsOnCart = JSON.stringify(productsOnCart);
  }

  handleState({ target }) {
    const { name } = target;
    const { productsOnCart } = this.state;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState((actualState) => ({ [name]: [...actualState.productsOnCart,
      JSON.parse(value)] }), () => {
      sessionStorage.productsOnCart = JSON.stringify(productsOnCart);
      return true;
    });
  }

  render() {
    const handle = this.handleState;
    const { productsOnCart } = this.state;
    const pathDetails = '/product-details/:product';
    return (
      <BrowserRouter>
        { Header(productsOnCart.length) }
        <Switch>
          <Route
            path={ pathDetails }
            render={ (props) => ProductDetails(props, handle) }
          />
          <Route path="/cart" render={ () => ShoppingCart(productsOnCart, handle) } />
          <Route exact path="/" render={ () => <Home handleCart={ handle } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
