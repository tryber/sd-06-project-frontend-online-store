import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends React.Component {
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
    this.setState({
      categories: await api.getCategories(),
    });
  }

  render() {
    const { categories } = this.state;
    const { handleClickCategory } = this.props;
    return (
      <div>
        { categories.map((itemCategory) => (
          <div key={ itemCategory.id }>
            <button
              type="button"
              data-testid="category"
              onClick={ handleClickCategory }
              value={ itemCategory.id }
            >
              { itemCategory.name }
            </button>
          </div>
        )) }
      </div>
    );
  }
}

Categories.propTypes = {
  handleClickCategory: PropTypes.func.isRequired,
};

export default Categories;
