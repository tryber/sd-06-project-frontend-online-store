import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    const categoriesList = [];
    api.getCategories()
      .then((result) => result.forEach((item) => categoriesList.push(item)))
      .then(() => this.setState({
        categories: categoriesList,
      }));
  }

  returnCategories() {
    const { categories } = this.state;
    return categories.map((category) => {
      return (
        <button
          data-testid="category"
          key={ category.id }
          type="button"
        >
          { category.name }
        </button>
      );
    });
  }

  render() {
    return (
      <div>
        <p>{this.returnCategories()}</p>
      </div>
    );
  }
}

export default Categories;
