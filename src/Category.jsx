import React, { Component } from 'react';
import * as api from './services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }


  async componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const response = await api.getCategories();
    this.setState({
      category: response,
    });
  }

  render() {
    const { category } = this.state;
    console.log(category);
    return (
      <div>
        {category.map((categoria) => (
          <label key={ categoria.id } htmlFor={ categoria.id }>
            <li data-testid="category" id={ categoria.id }>
              {categoria.name}
            </li>
          </label>
        ))}
      </div>
    );
  }
}

export default Category;
