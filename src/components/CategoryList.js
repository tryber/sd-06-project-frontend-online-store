import React, { Component } from 'react';
import * as API from '../services/api';
import '../styles/CategoryList.css';

class CategoryList extends Component {
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
    const result = await API.getCategories();

    this.setState({ categories: result });
  }

  renderListItem(id, name) {
    return (
      <li key={ id } data-testid="category">{name}</li>
    );
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="category-list">
        <span>Categorias :</span>
        <ul>
          {categories.map((catego) => this.renderListItem(catego.id, catego.name))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
