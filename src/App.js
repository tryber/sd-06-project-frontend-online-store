import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleEventChecked = this.handleEventChecked.bind(this);
    this.handleCartItems = this.handleCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.saveDetails = this.saveDetails.bind(this);

    this.state = {
      textInput: '',
      data: null,
      checkedId: null,
      productDetails: null,
      cart: {
        totalPrice: null,
        totalQtd: null,
        products: [],
      },
    };
  }

  onClick() {
    const { textInput: { query } } = this.state;
    if (query !== '') this.fetchProducts({ query });
  }

  addOrRemoveProduct(product, op) {
    console.log('Produto adicionado ao carrinho com sucesso!');
    console.log(product, op);
    const { cart: { products } } = this.state;
    let newListItems = [];
    if (products) {
      if (products.some((item) => (item.id === product.id))) {
        newListItems = products.map((item) => {
          if (item.id === product.id) {
            if (op === 'plus') {
              item.aqtd += 1;
            } else if (op === 'minus') {
              if (item.aqtd > 1) item.aqtd -= 1;
            }
            return item;
          }
          return item;
        });
        return newListItems;
      }
      return [...products, product];
    }
    return [product];
  }

  handleCartItems(product, op) {
    if (!product.aqtd) product.aqtd = 1;
    const productsUpdated = this.addOrRemoveProduct(product, op);
    this.setState({ cart: { products: productsUpdated } });
  }

  removeItem(id) {
    const { cart: { products } } = this.state;
    const newCartItems = products.filter((item) => item.id !== id);
    this.setState({ cart: { products: newCartItems } });
  }

  saveDetails(product) {
    this.setState({ productDetails: product });
  }

  handleEvent({ target }) {
    const query = target.value;
    this.setState({ textInput: query });
  }

  handleEventChecked({ target }) {
    const categoryId = target.value;
    this.setState({ checkedId: categoryId });
    this.fetchProducts({ categoryId });
  }

  async fetchProducts({ categoryId, query }) {
    const fetchData = await api.getProductsFromCategoryAndQuery({ categoryId, query });
    this.setState({ data: fetchData });
  }

  render() {
    const { data, textInput, cart, checkedId, productDetails } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/products/:id"
            component={ () => (<ProductDetails
              productDetails={ productDetails }
              handleCartItems={ this.handleCartItems }
            />) }
          />
          <Route
            path="/cart"
            component={ () => (<Cart
              removeItem={ this.removeItem }
              handleCartItems={ this.handleCartItems }
              cart={ cart }
            />) }
          />
          <Route
            exact
            path="/"
            component={ () => (<Home
              saveDetails={ this.saveDetails }
              data={ data }
              textInput={ textInput }
              handleEvent={ this.handleEvent }
              onClick={ this.onClick }
              handleCartItems={ this.handleCartItems }
              handleEventChecked={ this.handleEventChecked }
              checkedId={ checkedId }
            />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
