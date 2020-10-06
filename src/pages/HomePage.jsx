import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import { arrayProductList, countQuantity } from '../dados/cart_arrayProductList';
import * as api from '../services/api';

class HomePage extends Component {
  constructor() {
    super();

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.counterQuantity = this.counterQuantity.bind(this);

    this.state = {
      cards: [],
      query: '',
      categoryID: '',
      countQuantity: countQuantity(),
    };
  }

  componentDidUpdate() {
    arrayProductList.push(...this.state.cards);
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

  counterQuantity() {
    this.setState({ countQuantity: countQuantity() });
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
          <span data-testid="shopping-cart-size">{countQuantity()}</span>
          <SearchBar fetchCards={this.fetchProducts} handleStateChange={this.handleStateChange} />
        </div>
        <Categories handleCategoryClick={this.handleCategoryClick} />
        <ProductsList cards={cards} counterQuantity={this.counterQuantity} />
      </div>
    );
  }
}

export default HomePage;
