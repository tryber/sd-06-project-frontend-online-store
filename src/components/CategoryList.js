import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const result = await API.getCategories();

    this.setState({ categories: result });
  }

  renderListItem(id, name) {
    const { filterCategory, filter } = this.props;
    return (
      <div key={ id }>
        <input
          type="radio"
          name="input-radio"
          id={ id }
          filter={ filter }
          onClick={ filterCategory }
          data-testid="category"
        />
        <label htmlFor="input-radio">{name}</label>
      </div>
    );
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="category-list">
        <span>Categorias :</span>
        <form>
          {categories.map((catego) => this.renderListItem(catego.id, catego.name))}
        </form>
      </div>
    );
  }
}

CategoryList.propTypes = {
  filterCategory: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryList;
