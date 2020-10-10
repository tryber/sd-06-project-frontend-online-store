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
    this.isProductFromDetail = this.isProductFromDetail.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);

    this.state = {
      products: [],
      categoryId: '',
      categories: [],
      searchText: '',
      cartProductList: this.loadFromLocalStorage(),
      cartTotalItens: this.loadFromLocalStorage().length,
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
    this.isProductFromDetail();
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
    });
    const { searchText } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId,
      searchText);
    this.setState({
      products: products.results,
    });
  }

  saveToLocalStorage() {
    const { cartProductList } = this.state;
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }

  loadFromLocalStorage() {
    const cartProductList = JSON.parse(localStorage.getItem('cartProductList'));
    return cartProductList ? cartProductList : [];
  }

  clearLocalStorage() {
    localStorage.removeItem('cartTotalItens');
  }

  updateCart(productObject) {
    this.clearLocalStorage();
    this.setState((prevState) => ({
      cartProductList: [...prevState.cartProductList, productObject],
      cartTotalItens: prevState.cartTotalItens + 1,
    }), () => {
      this.saveToLocalStorage();
    });
  }

  isProductFromDetail() {
    if (this.props.location.product) {
      const { product, cartProductList } = this.props.location
      const cartTotalItens = cartProductList.length;
      this.setState(() => ({
        cartProductList: [...cartProductList, product],
        cartTotalItens: cartTotalItens + 1,
      }));
    }
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
            <ProductList
              products={ products }
              updateCart={ this.updateCart }
              cartProductList={ this.state.cartProductList }
            />
          </div>
        </main>
      </div>
    );
  }
}
