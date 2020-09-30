import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ProductList from '../components/ProductList';
import Input from '../components/Input';
import CategoryList from '../components/CategoryList';
import Carrinho from '../imgs/carrinho.png'
import * as API from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.state = {
      search: '',
      items: '',
      loadProducts: false,
    };
  }

  handleProduct() {
    const { search } = this.state;
    API
      .getProductsFromCategoryAndQuery(undefined, search)
      .then((result) => this.setState({ items: result.results, loadProducts: true }));
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search, items, loadProducts } = this.state;
    return (
      <div data-testid="home-initial-message" className="home-container">
        <div className="category-list-container">
          <CategoryList />
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
          {loadProducts ?
            (search === '' ? <span>Nenhum produto foi encontrado</span> :
            <ProductList items={ items } />) : ''}
          </div>
          <div>
            <Link to="/shopping-cart">
              <img data-testid="shopping-cart-button" src={ Carrinho } alt="Carrinho" />
            </Link>
          </div>
          <div>
        </div>
      </div>
    );
  }
}

export default Home;
