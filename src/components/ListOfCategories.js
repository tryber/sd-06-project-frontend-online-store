import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ListOfCategories extends Component {
  constructor() {
    super();
    this.categoriesList = this.categoriesList.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const response = await api.getCategories();
    this.setState({ categories: response });
  }

  async handleOnChange(category) {
    const { handleSelectOption } = this.props;
    handleSelectOption(category.id);
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h4> Categorias:</h4>
        <div>
          {categories.map((category) => (
            <div key={ category.id }>
              <label key={ category.id } htmlFor={ category.id }>
                <input
                  onClick={ () => this.handleOnChange(category) }
                  type="radio"
                  key={ category.id }
                  value={ category.value }
                  data-testid="category"
                />
                { category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  handleSelectOption: PropTypes.func.isRequired,
};

export default ListOfCategories;
