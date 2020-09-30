/* eslint-disable react/no-unused-state */
import React from 'react';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
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
      categories: value, // Recebe ID e NAME
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

  handleSelect({ target }) {
    const { categories } = this.state;
    const filteredCategory = categories.filter((item) => item.name === target.value);
    if (filteredCategory) {
      this.setState({
        categorySelected: target.value,
        categoryId: filteredCategory[0].id,
      });

      api.getProductsFromId(filteredCategory[0].id)
        .then((items) => this.setState({
          products: items.results,
        }));
    }
  }

  render() {
    const { products, categories } = this.state;
    return (
      <div>
        <select name="category" onChange={ this.handleSelect }>
          <option value="" disabled selected>Selecione a Categoria</option>
          {categories.map((items) => (
            <option
              data-testid="category"
              key={ items.id }
              value={ items.name }
            >
              { items.name }
            </option>
          ))}
        </select>
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
