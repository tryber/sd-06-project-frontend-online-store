import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';

export default class Home extends Component {
  constructor() {
    super();

    this.onClickSearch = this.onClickSearch.bind(this);
    this.updateCart = this.updateCart.bind(this);

    this.state = {
      products: [],
      categoryId: '',
      categories: [],
      searchText: '',
      cartProductList: [],
      cartTotalItens: 0,
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

  updateCart(productObject) {
    this.setState({
      cartProductList: [...this.state.cartProductList, productObject],
      cartTotalItens: this.state.cartTotalItens + 1,
    });
  }

  render() {
    const { categories } = this.state;
    const { products } = this.state;
    return (
      <div>
        <header className="search-bar">
          <SearchBar onClickSearch={ this.onClickSearch } />
          <ShoppingCartButton
            cartTotalItens={ this.state.cartTotalItens }
            cartProductList={ this.state.cartProductList }
          />
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
            <ProductList products={ products } updateCart={this.updateCart} />
          </div>
        </main>
      </div>
    );
  }
}
