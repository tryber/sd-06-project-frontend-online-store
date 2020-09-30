import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import Category from '../Category';

class Search extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);

    this.state = {
      searchInput: '',
      categoryInput: '',
      products: {},
      seachDone: false,
    };
  }

  handleChange({ target }) {
    this.setState({ searchInput: target.value });
  }

  async handleClick() {
    const { searchInput, categoryInput } = this.state;

    this.setState({ seachDone: true }, async () => {
      const productsList = await api
        .getProductsFromCategoryAndQuery(categoryInput, searchInput);
      this.setState({ products: productsList });
    });
  }

  async handleCategory(category) {
    const { searchInput } = this.state;
    const resultado = await api.getProductsFromCategoryAndQuery(category, searchInput);
    this.setState({
      products: resultado,
    })
  }


  render() {
    const { searchInput, products, seachDone } = this.state;
    const zero = 0;
    return (
      <div className="main-container">
        <Category handleCategory={ this.handleCategory } />
        <div className="search-container">
          <form className="searchForm">
            <input
              id="home-initial-input"
              type="text"
              data-testid="query-input"
              placeholder="Digite aqui o termo da sua busca"
              // required="required"
              value={ searchInput }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Buscar
            </button>
            <button type="button">
              <Link data-testid="shopping-cart-button" to="/ShoppingCart">
                Carrinho de compras
              </Link>
            </button>
          </form>
          <div className="product-container">
            { searchInput === '' && (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )}
            { Object.keys(products).length !== zero && (seachDone) && (
              products.results
                .map((item) => <ProductCard product={ item } key={ item.title } />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
