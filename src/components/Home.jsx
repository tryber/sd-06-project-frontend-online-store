import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';
import Search from './Search';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

import '../css/Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      productsFiltered: [],
      selectedCategory: {
        categoryId: '',
        checked: false,
      },
      productsFilteredByCategory: [],
    };

    this.getSearchQuery = this.getSearchQuery.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
    this.searchProductsBySearchQuery = this.searchProductsBySearchQuery.bind(this);
  }

  getCategoryId(category) {
    this.setState({
      selectedCategory: { categoryId: category, checked: true },
    });
    this.fetchProductsFilteredByCategory(category, '');
  }

  getSearchQuery(query) { // Pega o que foi digitado no campo de busca(Search) e atualiza o estado do componente pai
    this.setState({
      searchQuery: query,
    });
  }

  searchProductsBySearchQuery() {
    this.fetchProductsFromQueryAndCategory();
  }

  async fetchProductsFromQueryAndCategory() {
    const { searchQuery } = this.state;
    const response = await api.getProductsFromCategoryAndQuery('', searchQuery);
    this.setState({
      productsFiltered: response.results,
    });
  }

  async fetchProductsFilteredByCategory(categoryId) {
    const response = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      productsFilteredByCategory: response.results,
    });
  }

  render() {
    const { productsFiltered, selectedCategory, productsFilteredByCategory } = this.state;
    return (
      <div className="container">
        <header>
          <h1 className="home-initial-message" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </header>

        <section>
          <Search
            className="search-bar"
            getSearchQuery={ this.getSearchQuery }
          />
          <button type="button" data-testid="query-button" onClick={ this.searchProductsBySearchQuery }> Search </button>
          <Link data-testid="shopping-cart-button" to="/cart">Shopping Cart</Link>
        </section>

        <main>
          <aside>
            <CategoryList getCategoryId={ this.getCategoryId } />
          </aside>

          <section>
            { selectedCategory.checked === false ? productsFiltered.map((product) => (
              <div key={ product.id }>
                <ProductList
                  id={ product.id }
                  title={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              </div>
            )) : productsFilteredByCategory.map((product) => (
              <div key={ product.id }>
                <ProductList
                  id={ product.id }
                  title={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              </div>
            ))}
          </section>
        </main>
        <footer className="footer" />
      </div>
    );
  }
}

export default Home;
