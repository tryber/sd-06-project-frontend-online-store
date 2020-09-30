/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';


class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      categoryId: '',
      categorySelected: '',
      products: [],
      categories: [],
    };

    this.onClick = this.onClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((value) => this.setState({
      categories: value, // Recebe ID e  NAME
    }));
  }

  onClick() {
    const { categoryId } = this.state;
    const query = document.getElementById('search-label').value;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((items) => this.setState({
        products: items.results,
      }));
  }

  handleInputChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleSelect({ target }) {
    const myValue = target.id;
    const resposta = await api.getProductsFromId(myValue);
    if (resposta) {
      this.setState({
        products: resposta.results,
        categorySelected: target.value,
        categoryId: target.id,
      });
    }
  }

  render() {
    const { products, categories } = this.state;
    return (
      <div>
        {categories.map((items) => (
          <div key={ items.id }>
            <input
              type="radio"
              name="category"
              value={ items.name }
              id={ items.id }
              onClick={ this.handleSelect }
              data-testid="category"
            />
            <label htmlFor={ items.id }>{items.name }</label>
          </div>))}
        <label htmlFor="search-label">
          <input
            data-testid="query-input"
            type="text"
            id="search-label"
            onChange={ this.handleInputChange }
          />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button type="button">
          <Link data-testid="shopping-cart-button" to="/cart">teste</Link>
        </button>
        <button type="button" onClick={ this.onClick } data-testid="query-button">
          Buscar
        </button>
        <div>
          {products.map((items) => (<ProductList
            key={ items.id }
            items={ items }
          />))}
        </div>
      </div>
    );
  }
}

export default HomePage;
