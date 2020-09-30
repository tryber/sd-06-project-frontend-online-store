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
      <div className="category-container">
        {category.map((categoria, id) => (
          <div key={id}>
            <label>
              <input
                htmlFor={id}
                data-testid="category"
                type="radio"
                id={categoria.id}
              />
              {categoria.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
