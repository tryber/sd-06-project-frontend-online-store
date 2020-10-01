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

  async onClickSearch(event) {
    const { categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, event);
    this.setState({
      products: products.results,
    });
  }

  onClickCategory(categoryId) {
    this.setState(
      {
        categoryId,
      },
    );
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
            <ul className="categoryList">
              {categories.map((category) => (
                <li data-testid="category" key={ category.id }>
                  <label htmlFor="category">
                    {category.name}
                    <input
                      type="radio"
                      name="category"
                      id="category"
                      onClick={ () => this.onClickCategory(category.id) }
                    />
                  </label>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ProductList products={ products } />
          </div>
        </main>
      </div>
    );
  }
}
