import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      categorySelected: '',
    };
    this.fetchListProductsCategory = this.fetchListProductsCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchListProductsCategory();
  }

  async fetchListProductsCategory() {
    const categoriesList = await api.getCategories();
    this.setState({ categoriesList });
  }

  handleClick({ target }) {
    const { value } = target;

    this.setState({ categorySelected: value }, () => {
      this.props.onClick(this.state.categorySelected);
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        Categorias:
        {categoriesList.map(({ id, name }) => (
          <div key={id}>
            <label htmlFor={id} data-testid="category" key={id}>
              <input
                name="category"
                id={id}
                type="radio"
                value={id}
                onClick={this.handleClick}
              />
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

ListCategory.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListCategory;
