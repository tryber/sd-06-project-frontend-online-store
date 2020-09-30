import React, { Component } from 'react';

import * as api from '../services/api';

class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
    this.fetchListProductsCategory = this.fetchListProductsCategory.bind(this);
  }

  componentDidMount() {
    this.fetchListProductsCategory();
  }

  async fetchListProductsCategory() {
    const productsList = await api.getCategories();
    this.setState({ productsList });
  }

  render() {
    const { productsList } = this.state;
    return (
      <div>
        Categorias:
        {productsList.map(({ id, name }) => (
          <li
            data-testid="category"
            key={ id }
          >
            {name}
          </li>
        ))}
      </div>
    );
  }
}

export default ListCategory;
