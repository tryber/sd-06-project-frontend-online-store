import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from '../services/api';
import ShoppingCartButton from './ShoppingCartButton';

export default class Home extends Component {
  constructor() {
    super();

    this.onClickSearch = this.onClickSearch.bind(this);

    this.state = {
      products: [],
      categoryId: '',
      categories: [],
      searchText: '',
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  async onClickSearch(searchText) {
    const { categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({
      products: products.results,
      searchText,
    });
  }

  async onClickCategory(categoryId) {
    this.setState({
        categoryId,
      },);
    const products = await api.getProductsFromCategoryAndQuery(categoryId, this.state.searchText);
    this.setState({
        products: products.results,
    });
  }

  render() {
    const { categories } = this.state;
    const { products } = this.state;
    return (
      <div>
        <header className="search-bar">
          <SearchBar onClickSearch={ this.onClickSearch } />
          <ShoppingCartButton />
        </header>
        <main className="main-page">
          <nav className="categories">
            {categories.map((category) => (
              <div key={ category.id }>
                <label htmlFor={ category.id }>
                  <input
                    data-testid="category"
                    type="radio"
                    name="category"
                    id={ category.id }
                    onClick={ () => this.onClickCategory(category.id) }
                  />
                  {category.name}
                </label>
              </div>
            ))}
          </nav>
          <div>
            <ProductList products={ products } />
          </div>
        </main>
      </div>
    );
  }
}
