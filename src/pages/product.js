import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class product extends Component {
  constructor(props) {
    super(props);
    this.searchApiProducts = this.searchApiProducts.bind(this);
    this.state = {
    //   products: [],
    };
  }

  async searchApiProducts(categoryId) {
    await api.getProductsFromCategoryAndQuery(categoryId).then((res) => {
      console.log(res.results);
      console.log(categoryId);
    });
  }

  render() {
    const { match } = this.props;
    const { categoryId } = match.params;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.searchApiProducts(categoryId) }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

product.propTypes = {
  match: PropTypes.objectOf.isRequired,
};
