import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/categoryList';
import * as api from '../services/api';
import Cart from '../images/cart.png';

class homeList extends Component {
  constructor() {
    super();
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.requestCategories = this.requestCategories.bind(this);
    this.state = {
      categories: [],
      query: '',
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  handleAreaChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  async requestCategories() {
    const requestCategories = await api.getCategories();
    this.setState({
      categories: requestCategories,
    });
  }

  render() {
    const { query, categories, valorInit } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/cart">
          <img
            data-testid="shopping-cart-button"
            width="50px"
            src={ Cart }
            alt="card"
          />
        </Link>
        <input
          type="text"
          name="query"
          value={ query }
          data-testid="query-input"
          onChange={ this.handleAreaChange }
        />
        <CategoryList query={ query } categories={ categories } valorInit={ valorInit } />
      </div>
    );
  }
}
export default homeList;
