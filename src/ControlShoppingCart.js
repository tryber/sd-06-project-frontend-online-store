import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import PagInicial from './PagInicial';
import CarrinhoCompras from './components/CarrinhoCompras';
import ProductDetails from './components/ProductDetails';

class ControlShoppingCart extends Component {
  constructor() {
    super();

    this.setValue = this.setValue.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.setProductCart = this.setProductCart.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);
    this.fetchCategory = this.fetchCategory.bind(this);
    this.increaseProduct = this.increaseProduct.bind(this);

    this.state = {
      category: '',
      value: '',
      products: [],
      empty: '',
      productCart: [],
      countProducts: '0',
    };
  }

  setValue({ target }) {
    this.setState({
      value: target.value,
    });
  }

  setProductCart(productName, productId, productPrice, productThumbnail) {
    const { productCart } = this.state;
    let control = false;
    if (productCart.length < 1) {
      control = true;
      this.setState((prevState) => ({
        productCart: prevState.productCart.concat(
          {
            name: productName,
            id: productId,
            price: productPrice,
            thumbnail: productThumbnail,
            countTotal: 1,
          },
        ),
        countProducts: (Number(prevState.countProducts) + 1).toString(),
      }));
    }
    productCart.forEach((productList) => {
      if (productList.id === productId) {
        const beforeState = productList.countTotal;
        productList.countTotal = beforeState + 1;
        control = true;
      }
    });
    if (control === false) {
      this.setState((prevState) => ({
        productCart: prevState.productCart.concat(
          {
            name: productName,
            id: productId,
            price: productPrice,
            thumbnail: productThumbnail,
            countTotal: 1,
          },
        ),
        countProducts: (Number(prevState.countProducts) + 1).toString(),
      }));
    }
  }

  increaseProduct(productId) {
    const { productCart } = this.state;
    productCart.forEach((productList) => {
      if (productList.id === productId) {
        const beforeState = productList.countTotal;
        productList.countTotal = beforeState + 1;
      }
    });
  }

  async fetchCategory(param) {
    const { empty } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(param, empty);
    this.setState(() => ({
      products: result.results,
    }));
  }

  async fetchApi() {
    const { value, category } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(category, value);
    this.setState(() => ({
      products: result.results,
    }));
  }

  render() {
    const { products, productCart, countProducts } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/ProductDetails/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  setProductCart={ this.setProductCart }
                  products={ products }
                />) }
            />
            <Route
              path="/CarrinhoCompras"
              render={ (props) => (
                <CarrinhoCompras
                  { ...props }
                  productCart={ productCart }
                  increaseProduct={ this.increaseProduct }
                />) }
            />
            <Route
              exact
              path="/"
              render={ (props) => (
                <PagInicial
                  { ...props }
                  productCart={ productCart }
                  setProductCart={ this.setProductCart }
                  products={ products }
                  fetchCategory={ this.fetchCategory }
                  countProducts={ countProducts }
                  fetchApi={ this.fetchApi }
                  setValue={ this.setValue }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default ControlShoppingCart;
