import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';


class ListCategories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    this.listCategories();
  }

  async listCategories() {
    const response = await api.getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    const { handleListCategories } = this.props;
    return (
      <div>
        <h4>Categories:</h4>
        <div onChange={ (event) => handleListCategories(event.target.id) }>
          {categories.map((category) => (
            <label htmlFor={ category.id } key={ category.id }>
              <input
                type="radio"
                value={ category.name }
                name="categories"
                data-testid="category"
                id={ category.id }
              />
              { category.name }
              <br />
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default ListCategories;

ListCategories.propTypes = { handleListCategories: PropTypes.func.isRequired };
