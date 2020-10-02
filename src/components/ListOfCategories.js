import React, { Component } from 'react';
import * as api from '../services/api';

class ListOfCategories extends Component {
  constructor() {
    super();
    this.categoriesList = this.categoriesList.bind(this);

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

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h4> Categorias:</h4>
        <ul>
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">{ category.name }</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListOfCategories;
