import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductsList from './productsList';

export default class CategoryList extends Component {
  constructor() {
    super();
    this.checkInputCategorie = this.checkInputCategorie.bind(this);
    this.state = {
      categoryId: '',
      products: [],
    };
  }

  checkInputCategorie({ target }) {
    const { name } = target;
    this.setState({
      categoryId: '',
    });
    this.setState({
      categoryId: name,
    });
  }

  async searchApiProducts(categoryId, query) {
    const array = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: array.results,
    });
  }

  render() {
    const { categoryId, products } = this.state;
    const { query, categories } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.searchApiProducts(categoryId, query) }
        >
          Pesquisar
        </button>
        <ul>
          {categories.map((element) => (
            <div data-testid="category" key={ element.id }>
              <button
                type="button"
                name={ element.id }
                onClick={ this.checkInputCategorie }
              >
                {element.name}
              </button>
            </div>
          ))}
        </ul>
        <ul>
          <ProductsList products={ products } />
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  query: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf.isRequired,
};
