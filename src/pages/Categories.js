import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
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
        { categories.map((itemCategory) => (
          <li data-testid="category" key={ itemCategory.id }>
            { itemCategory.name }
          </li>
        )) }
      </div>
    );
  }
}

export default Categories;
