import React, { Component } from 'react';

import {
  SearchBar, ProductsList, CategoriesList, ShoppingCartButton,
} from '../components';

import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);
    this.onCategoriesChange = this.onCategoriesChange.bind(this);
    this.addProductToCard = this.addProductToCard.bind(this);
    this.loadShoppingCart = this.loadShoppingCart.bind(this);

    this.state = {
      products: [],
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.loadShoppingCart();
  }

  async onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.getElementById('search-input');
    const data = await getProductsFromCategoryAndQuery(value);
    const { results } = data;
    this.setState((prevState) => ({ products: [...results, ...prevState.products] }));
  }

  async onCategoriesChange({ target }) {
    const { value } = target;
    const data = await getProductsFromCategoryAndQuery('', value);
    const { results } = data;
    this.setState({ products: [...results] });
  }

  loadShoppingCart() {
    if (localStorage.cart) {
      const productsOnCart = JSON.parse(localStorage.cart);
      this.setState(({ shoppingCart }) => ({
        shoppingCart: [...shoppingCart, ...productsOnCart],
      }));
    }
  }

  addProductToCard(id, title, thumbnail, price) {
    this.setState(({ shoppingCart }) => {
      if (shoppingCart.some((el) => el.id === id)) {
        const updatedCart = shoppingCart.reduce((acc, el) => {
          if (el.id === id) {
            el.amount += 0.5;
          }
          return [...acc];
        }, shoppingCart);

        localStorage.cart = JSON.stringify(updatedCart);
        return { shoppingCart: updatedCart };
      }

      const updatedCart = [...shoppingCart, { id, amount: 1, title, thumbnail, price }];
      localStorage.cart = JSON.stringify(updatedCart);
      return { shoppingCart: updatedCart };
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div>
          <SearchBar onSearchTextSubmit={ this.onSearchTextSubmit } />
          <CategoriesList
            onCategoriesChange={ this.onCategoriesChange }
          />
          <ShoppingCartButton />
        </div>

        <ProductsList products={ products } addProductToCard={ this.addProductToCard } />

      </div>
    );
  }
}

export default Main;
