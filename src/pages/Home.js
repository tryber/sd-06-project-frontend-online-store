import React from 'react';
import ProductList from '../components/ProductList';
import Input from '../components/Input';
import '../styles/Home.css';
import CategoryList from '../components/CategoryList';
import * as API from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
    this.state = {
      search: '',
      items: '',
      filter: '',
    };
  }

  handleProduct() {
    const { search } = this.state;
    API
      .getProductsFromCategoryAndQuery(search)
      .then((result) => this.setState({ items: result.results }));
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  async filterCategory({ target }) {
    this.setState({ filter: target.id });

    const { filter } = this.state;
    API
      .getProductsFromCategoryAndQuery(filter)
      .then((result) => this.setState({ items: result.results }));
  }

  render() {
    const { search, items, filter } = this.state;
    return (
      <div data-testid="home-initial-message">
        <div>
          <CategoryList filter={ filter } filterCategory={ this.filterCategory } />
          <span>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <Input
            value={ search }
            onChange={ this.handleSearch }
            onClick={ this.handleProduct }
          />
        </div>
        <ProductList items={ items } />
      </div>
    );
  }
}

export default Home;
