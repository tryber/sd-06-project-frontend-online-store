import React, { Component } from 'react';

import ListCategories from '../components/ListCategories';

import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      isFail: false,
      categoryId: '',
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleListCategories = this.handleListCategories.bind(this);
  }

  async handleClickSearchButton() {
    const { query, categoryId } = this.state;
    const valueFromApi = await getProductsFromCategoryAndQuery(categoryId, query);
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


  render() {
    const { products, isFail } = this.state;
    return (
      <main>
        <label
          htmlFor="input-message"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="query"
            data-testid="query-input"
            onChange={ this.handleInputSearchChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClickSearchButton }
        >
          SEARCH
        </button>
        <div>
          <ListCategories handleListCategories={ this.handleListCategories } />
        </div>
        <ShoppingCartButton />
        <ProductCard products={ products } isFail={ isFail } />
      </main>
    );
  }
}

export default Home;
