import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';

class HomePage extends Component {
  constructor() {
    super();

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      cards: [],
      query: '',
      categoryID: '',
      errorMessage: '',
    };
  }

  handleStateChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleCategoryClick(id) {
    this.setState({ categoryID: id }, () => {
      this.fetchProducts();
    });
  }

  async fetchProducts() {
    const { query, categoryID } = this.state;

    const cards = await api.getProductsFromCategoryAndQuery(categoryID, query)
      .then(resolve => resolve.results);

    this.setState({
      cards,
    });
  }

  // async func1() {
  //   await req = api.getCategories();
  // }

  render() {
    const { cards, query } = this.state;
    // console.log();

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <SearchBar fetchCards={this.fetchProducts} handleStateChange={this.handleStateChange} />
        <ProductsList cards={cards} query={query} />
        <Categories handleCategoryClick={this.handleCategoryClick} />
      </div>
    );
  }
}

export default HomePage;
