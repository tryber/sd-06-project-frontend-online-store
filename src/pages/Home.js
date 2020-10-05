import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';
import Input from '../components/Input';
import ProductList from '../components/ProductList';
import Carrinho from '../imgs/carrinho.png';
import * as API from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      search: '',
      items: '',
      loadProducts: false,
      filter: '',
    };
  }

  handleProduct() {
    const { search } = this.state;
    API
      .getProductsFromCategoryAndQuery('all', search)
      .then((result) => this.setState({ items: result.results, loadProducts: true }));
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleFilter() {
    const { filter } = this.state;
    API
      .getProductsFromCategoryAndQuery(filter, undefined)
      .then((result) => this.setState({ items: result.results, loadProducts: true })
      );
  }

  filterCategory({ target }) {
    this.setState({ filter: target.id });
    this.handleFilter();
  }

  renderProducts() {
    const { loadProducts, search, items, filter } = this.state;
    if (loadProducts) {
      if (search === '' && filter === '') {
        return <span>Nenhum produto foi encontrado</span>;
      }
      return <ProductList items={ items } />;
    }
  }

  render() {
    const { search, filter } = this.state;
    return (
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div data-testid="home-initial-message" className="home-container">
          <div className="category-list-container">
            <CategoryList filter={ filter } filterCategory={ this.filterCategory } />
          </div>
          <div className="home">
            <span className="home-span">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
            <Input
              value={ search }
              onChange={ this.handleSearch }
              onClick={ this.handleProduct }
            />
            {this.renderProducts()}
          </div>
          <div>
            <Link to="/shopping-cart">
              <img data-testid="shopping-cart-button" src={ Carrinho } alt="Carrinho" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
