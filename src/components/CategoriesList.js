import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.listCategory = this.listCategory.bind(this);
  }

  componentDidMount() {
    this.listCategory();
  }

  async listCategory() {
    const cat = await getCategories();
    this.setState({
      categories: cat,
    });
  }

  render() {
    const { categories } = this.state;
    const { onCategoriesChange } = this.props;

    return (
      <section>
        {categories.map((cat) => (
          <label htmlFor={ cat.id } key={ cat.id }>
            <input
              id={ cat.id }
              value={ cat.id }
              name="category"
              type="radio"
              onClick={ onCategoriesChange }
              data-testid="category"
            />
            { cat.name }
          </label>
        ))}
      </section>
    );
  }
}

CategoriesList.propTypes = {
  onCategoriesChange: PropTypes.func.isRequired,
};

export default CategoriesList;
