import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class SearchProduct extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.saveInputValue = this.saveInputValue.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
      inputValue: '',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  saveInputValue(inputValue) {
    this.setState({
      inputValue,
    });
  }

  async handleSearchProduct(event) {
    event.preventDefault();

    const { categoryId, inputValue } = this.state;

    if (!inputValue) {
      return;
    }

    const {
      results: products,
    } = await getProductsFromCategoryAndQuery(categoryId, inputValue);

    this.setState({
      products,
    });
  }

  render() {
    const { categories, inputValue, products } = this.state;
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">cart</Link>
        <div className="search-product-content">
          <div>
            <h2>Categorias</h2>
            <ul>
              {categories.map(({ name, id }) => (
                <li data-testid="category" key={ id }>{name}</li>
              ))}

            </ul>
          </div>

          <div className="form-products">
            <form onSubmit={ this.handleSearchProduct }>
              <h1 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h1>
              <input
                onChange={ (e) => this.saveInputValue(e.target.value) }
                value={ inputValue }
                data-testid="query-input"
                type="text"
              />
              <button data-testid="query-button" type="submit">Pesquisar</button>
            </form>
            <div className="product-list">
              {products[0]
                ? products.map(({ title, thumbnail, price, id }) => (
                  <ProductCard
                    key={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                  />
                ))
                : (<p>Nenhum produto foi encontrado</p>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchProduct;
