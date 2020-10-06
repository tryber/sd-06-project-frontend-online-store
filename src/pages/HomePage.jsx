 
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';


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
    this.teste = this.teste.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((value) => this.setState({
      categories: value,
    }));
  }
  addCart(productName, productId) {
    this.setState((prevState) => ({
      cartItem: prevState.cartItem.concat({ name: productName, id: productId }),
      cartCount: (Number(prevState.cartCount) + 1).toString(),

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
    const resposta = await api.getProductsFromCategoryAndQuery(target.id, target.value);
    if (resposta) {
      this.setState({
        products: resposta.results,
        categorySelected: target.value,
        categoryId: target.id,
      });
    }
  }


  teste(items) {
    console.log(items);
  }

  render() {
    // if () return <Redirect to="/" />;
    const { products, categories } = this.state;
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
        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button">CARRINHO</button>
        </Link>
        <button type="button" onClick={ this.onClick } data-testid="query-button">
          Buscar
        </button>
        <div>
          {products.map((items) => (<ProductList
          cartItem={this.state.cartItem}
          cartCount={this.state.cartCount}
          addCart={ this.addCart}
            key={ items.id }
            items={ items }
            teste={ this.teste }
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

HomePage.propTypes = {
  cartItem: PropTypes.arrayOf.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default HomePage;
