import React, { Component } from 'react';
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

  async handleOnChange({ target }) {
    const { handleSelectOption } = this.props;
    handleSelectOption(target.value);
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h4> Categorias:</h4>
        <select onChange={ this.handleOnChange }>
          {categories.map((category) => (
            <option
              key={ category.id }
              value={ category.id }
              data-testid="category"
            >
              { category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ListOfCategories;
