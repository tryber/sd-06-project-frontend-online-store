import React from 'react';
import * as api from '../services/api';

class ListCategories extends React.Component {
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
    return (
      <div>
        {categories.map((category) => (
          <li
            key={ category.id }
            id={ category.id }
            data-testid="category"
          >
            { category.name }
          </li>
        ))}
      </div>
    );
  }
}

export default ListCategories;
