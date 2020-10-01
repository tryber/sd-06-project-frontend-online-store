import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductsList from './productsList';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    const { query } = this.props;
    this.checkInputCategorie = this.checkInputCategorie.bind(this);
    this.searchApiProducts = this.searchApiProducts.bind(this);
    this.state = {
      categoryId: '',
      products: [],
      query,
    };
  }

  checkInputCategorie({ target }) {
    const { query } = this.state;
    const { name } = target;
    this.setState({
      categoryId: name,
    });
    this.searchApiProducts(name, query);
  }

  async searchApiProducts(categoryId, query) {
    await api.getProductsFromCategoryAndQuery(categoryId, query).then((res) => {
      this.setState(
        {
          products: res.results,
        },
        console.log(res.results),
      );
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
            <div key={ element.id }>
              <button
                data-testid="category"
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
          <ProductsList products={ products } categoryId={ categoryId } query={ query } />
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  query: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf.isRequired,
};
