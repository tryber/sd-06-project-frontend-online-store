import React from 'react';
import * as api from './services/api';

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

    return (
      <div>
        <h4>Categories:</h4>
        <ul>
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">{ category.name }</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListCategories;
