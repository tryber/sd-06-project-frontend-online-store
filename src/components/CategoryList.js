import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.fetchCategoryList = this.fetchCategoryList.bind(this);
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  async fetchCategoryList() {
    const categoryList = await api.getCategories();
    this.setState({ categories: categoryList });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories
          .map((category) => (
            <label htmlFor="categories" key={ category.id }>
              <input type="radio" id="input" data-testid="category" name="categories" />
              {category.name}
            </label>
          ))}
      </div>
    );
  }
}

export default CategoryList;
