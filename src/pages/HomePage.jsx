/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

export function onClick() {
  const { categoryId } = this.state;
  const query = document.getElementById('search-label').value;
  api.getProductsFromCategoryAndQuery(categoryId, query)
    .then((items) => this.setState({
      products: items.results,
    }));
}

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      categoryId: '',
      categorySelected: '',
      products: [],
      categories: [],
      cartItem: [],
      cartCount: '0',
    };

    this.onClick = this.onClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((value) => this.setState({
      categories: value,
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

  addCart(productName, productId) {
    this.setState((prevState) => ({
      cartItem: prevState.cartItem.concat({ name: productName, id: productId }),
      cartCount: (Number(prevState.cartCount) + 1).toString(),
    }));
  }

  handleInputChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleSelect({ target }) {
    const resposta = await api.getProductsFromCategoryAndQuery(target.id, target.value);
    if (resposta) {
      this.setState({
        products: resposta.results,
        categorySelected: target.value,
        categoryId: target.id,
      });
    }
  }


  render() {
    const { products, categories, cartItem, cartCount } = this.state;
    return (
      <div>
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
        <Link to={ { pathname: '/cart', state: { cartItem, cartCount } } }>
          <button data-testid="shopping-cart-button" type="button">CARRINHO</button>
        </Link>
        <button type="button" onClick={ this.onClick } data-testid="query-button">
          Buscar
        </button>
        <div>
          {products.map((items) => (<ProductList
            cartItem={ cartItem }
            cartCount={ cartCount }
            addCart={ this.addCart }
            key={ items.id }
            items={ items }
          />))}
        </div>
        <div>
          {categories.map((items) => (<CategoryList
            key={ items.id }
            onClick={ this.handleSelect }
            items={ items }
          />))}
        </div>
      </div>
    );
  }
}


export default HomePage;
