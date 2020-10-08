import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      isFail: false,
      categoryId: '',
    };
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleListCategories = this.handleListCategories.bind(this);
  }

  async handleClickSearchButton() {
    const { query, categoryId } = this.state;
    const valueFromApi = await getProductsFromCategoryAndQuery(categoryId, query);
    valueFromApi.results.forEach((element) => { element.ammount = 0; });
    const emptyArray = 0;
    if (valueFromApi.results.length === emptyArray) {
      this.setState({
        isFail: true,
        products: [],
      });
    } else {
      this.setState({
        products: valueFromApi.results,
        isFail: false,
      });
    }
  }

  handleInputSearchChange({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  handleListCategories(id) {
    const value = id;
    this.setState({ categoryId: value }, async () => {
      await this.handleClickSearchButton();
    });
  }

  render() {
    const { handleAddCart } = this.props;
    const { products, isFail } = this.state;

    return (
      <main>
        <label
          htmlFor="input-message"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="query"
            data-testid="query-input"
            onChange={ this.handleInputSearchChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClickSearchButton }
        >
          BUSCAR
        </button>
        <div>
          <ListCategories handleListCategories={ this.handleListCategories } />
        </div>
        <ShoppingCartButton />
        <ProductCard
          products={ products }
          isFail={ isFail }
          handleAddCart={ handleAddCart }
        />
      </main>
    );
  }
}

Home.propTypes = {
  handleInputSearchChange: PropTypes.func,
  handleClickSearchButton: PropTypes.func,
  handleListCategories: PropTypes.func,
  handleAddCart: PropTypes.func,
  products: PropTypes.object,
  cartList: PropTypes.array,
  isFail: PropTypes.bool,
}.isRequired;

export default Home;
