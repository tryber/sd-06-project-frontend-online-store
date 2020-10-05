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
      productCart: [],
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleListCategories = this.handleListCategories.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
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

  handleAddCart(product) {
    this.setState((prevState) => ({ productCart: [...prevState.productCart, product] }));
  }

  render() {
    const { products, isFail, productCart } = this.state;
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
          BUSCAR
        </button>
        <div>
          <ListCategories handleListCategories={ this.handleListCategories } />
        </div>
        <ShoppingCartButton productCart={ productCart } />
        <ProductCard
          products={ products }
          isFail={ isFail }
          handleAddCart={ this.handleAddCart }
        />
      </main>
    );
  }
}

export default Home;
