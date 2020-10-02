import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.categoryListFetch();
  }

  async categoryListFetch() {
    this.setState({
      categoryList: await api.getCategories(),
    });
  }

  render() {
    const { categoryList } = this.state;

    return (
      <div>
        {categoryList.map((category) => (
          <div data-testid="category" key={ category.id }>
            <label>
              <input type="checkbox" />
              { category.name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;
