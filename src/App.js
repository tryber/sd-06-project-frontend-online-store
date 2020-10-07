import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import ShoppingCart from './pages/ShoppingCart';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      isFail: false,
      categoryId: '',
      cartList: [],
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleListCategories = this.handleListCategories.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  async handleClickSearchButton() {
    const { query, categoryId } = this.state;
    const valueFromApi = await getProductsFromCategoryAndQuery(categoryId, query);
    valueFromApi.results.forEach((element) => { element.ammount = 0; });
    const emptyArray = 0;
    if (valueFromApi.results.length === emptyArray) {
      this.setState({
        isFail: true,
        products: [],
      });
    } else {
      this.setState({
        products: valueFromApi.results,
        isFail: false,
      });
    }
  }

  handleInputSearchChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  handleListCategories(id) {
    const value = id;
    this.setState({ categoryId: value }, async () => {
      await this.handleClickSearchButton();
    });
  }

  handleAddCart(product) {
    product.ammount += 1;
    if (product.ammount > 1) return;
    this.setState((prevState) => ({ cartList: [...prevState.cartList, product] }));
  }

  render() {
    const { cartList, isFail, products } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/products/:id"
              render={ (props) => (
                <ProductsDetails
                  { ...props }
                  cartList={ cartList }
                  handleAddCart={ this.handleAddCart }
                />) }
            />
            <Route
              path="/shopping-cart"
              render={ () => <ShoppingCart cartList={ cartList } /> }
            />
            <Route
              path="/"
              render={ () => (
                <Home
                  handleInputSearchChange={ this.handleInputSearchChange }
                  handleClickSearchButton={ this.handleClickSearchButton }
                  handleListCategories={ this.handleListCategories }
                  handleAddCart={ this.handleAddCart }
                  isFail={ isFail }
                  products={ products }
                  cartList={ cartList }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
