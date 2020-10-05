import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],
    };

    this.returnCategoryId = this.returnCategoryId.bind(this);
  }

  componentDidMount() {
    this.categoryListFetch();
  }

  returnCategoryId({ target }) {
    const { getCategoryId } = this.props;
    getCategoryId(target.id);
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
            <label htmlFor="category">
              <input type="radio" name="category" id={ category.id } onChange={ this.returnCategoryId } />
              { category.name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;
