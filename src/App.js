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
    if (localStorage.getItem('productsOnCart') != null) {
      sessionStorage.productsOnCart = localStorage.getItem('productsOnCart');
      localStorage.removeItem('productsOnCart');
    }
    const vfyStorageCart = sessionStorage.getItem('productsOnCart') != null;
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
    if (productsOnCart.length >= 1 && sessionStorage.productsOnCart != null) {
      const productsToSave = sessionStorage.productsOnCart;
      localStorage.productsOnCart = productsToSave;
    }
    return true;
  }

  handleState({ target }) {
    const { name: nameAndOperation, value: valueUntreated } = target;
    const { productsOnCart } = this.state;
    const [name, operation] = nameAndOperation.split('/');
    const value = JSON.parse(valueUntreated);
    const productExist = productsOnCart.find((product) => product.id === value.id);
    let newOnCartState = [];
    if (productExist === undefined) {
      const uniqueProduct = { ...value, quantityOnCart: 1 };
      newOnCartState = [...productsOnCart, uniqueProduct];
    } else {
      if (operation === 'add') {
        productExist.quantityOnCart += 1;
      } else {
        productExist.quantityOnCart -= 1;
      }
      const productExistIndex = productsOnCart.findIndex((prod) => prod.id
        === productExist.id);
      newOnCartState = productsOnCart;
      if (productExist.quantityOnCart < 1) {
        newOnCartState.splice(productExistIndex, 1);
      } else {
        newOnCartState[productExistIndex] = productExist;
      }
    }
    this.setState({ [name]: newOnCartState }, () => {
      const { productsOnCart: releasedCart } = this.state;
      sessionStorage.productsOnCart = JSON.stringify(releasedCart);
      return true;
    });
  }

  render() {
    const handle = this.handleState;
    const { productsOnCart } = this.state;
    const pathDetails = '/product-details/:product';
    const init = 0;
    const totalQuantity = (productsOnCart.length >= 1) ? productsOnCart.reduce((sumQty,
      product) => sumQty + product.quantityOnCart, init) : init;
    return (
      <BrowserRouter>
        { Header(totalQuantity) }
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
