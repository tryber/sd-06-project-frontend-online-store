import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import Category from '../Category';

class Search extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);

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
      const productsList = await
      api.getProductsFromCategoryAndQuery(categoryInput, searchInput);
      this.setState({ products: productsList });
    });
  }

  handleClickCategory(categoryId) {
    this.setState({
      categoryInput: categoryId,
      seachDone: true,
    });
  }

  async handleCategory(category) {
    const { searchInput } = this.state;
    const resultado = await api.getProductsFromCategoryAndQuery(category, searchInput);
    this.setState({
      products: resultado,
    });
  }

  render() {
    const { searchInput, products, seachDone } = this.state;
    const { addItemCart } = this.props;
    const zero = 0;
    return (
      <div>
        <header className="header">
          <div className="form-div">
            <div className="shopping-cart-div">
              <Link data-testid="shopping-cart-button" to="/ShoppingCart">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/263/263142.svg"
                  alt="Carrinho de compra"
                  width="50"
                />
              </Link>
            </div>
            <form className="searchForm">
              <input
                className="search-input"
                id="home-initial-input"
                type="text"
                data-testid="query-input"
                placeholder="Digite aqui o termo da sua busca"
                value={ searchInput }
                onChange={ this.handleChange }
              />
              <button
                className="search-button"
                type="button"
                data-testid="query-button"
                onClick={ this.handleClick }
              >
                Buscar
              </button>
            </form>
          </div>
        </header>
        <div className="center-container">
          <Category
            handleCategory={ this.handleCategory }
            handleClickCategory={ this.handleClickCategory }
          />
          <div className="search-container">
            <div className="product-container">
              {!seachDone && (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )}
              {Object.keys(products).length !== zero
              && seachDone
              && products.results.map((item) => (
                <ProductCard
                  addItemCart={ addItemCart }
                  product={ item }
                  key={ item.title }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = { addItemCart: PropTypes.string.isRequired };
export default Search;
