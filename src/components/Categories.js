import React from 'react';
import * as api from '../services/api';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  constructor() {
    super();

    this.chooseCategories = this.chooseCategories.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  chooseCategories (e) {
    this.setState({ categoryId: e.target.id})
    
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
    return categories.map((category) => (
      <button
      id={ category.id }
      data-testid="category"
      key={ category.id }
      type="button"
      onClick={this.chooseCategories}
      >
        { category.name }
      </button>
    ));
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
