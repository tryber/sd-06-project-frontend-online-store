import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Carrinho from '../imgs/carrinho.png';
import ProductList from './ProductList';
import Input from './Input';
import * as API from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.state = {
      search: '',
      items: '',
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

  render() {
    const { search, items } = this.state;
    return (
      <div className="home">
        <div data-testid="home-initial-message" className="search-bar">
          <span className="home-span">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <Input
            value={ search }
            onChange={ this.handleSearch }
            onClick={ this.handleProduct }
          />
          <ProductList items={ items } />
          <Link to="/shopping-cart">
            <img data-testid="shopping-cart-button" src={ Carrinho } alt="Carrinho" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
