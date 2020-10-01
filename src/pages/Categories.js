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
    const { filterCategory } = this.props;

    return (
      <div>
        { categories.map((itemCategory) => (
          <li data-testid="category" key={ itemCategory.id }>
            <label htmlFor={ filterCategory.id }>
              <input
                type="radio"
                name="category"
                value={ itemCategory.id }
                onClick={ (event) => filterCategory(event) }
              />
              { itemCategory.name }
            </label>
          </li>
        )) }
      </div>
    );
  }
}

Categories.propTypes = { filterCategory: PropTypes.func.isRequired };

export default Categories;
