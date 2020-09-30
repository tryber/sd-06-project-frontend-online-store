import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.fetchCategoryList = this.fetchCategoryList.bind(this);
    this.state = { categories: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  handleClick({ target }) {
  // const selectedOption  = this.
    const IdTarget = target.id;
  // selectedCategory(IdTarget);// função para busca
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
            <label htmlFor={ category.id } key={ category.id }>
              <input
                type="radio"
                id={ category.id }
                data-testid="category"
                name="categories"
                // checked={ selectedOption } adicionar função selecionadora
                onClick={ this.handleClick }
              />
              {category.name}
            </label>
          ))}
      </div>
    );
  }
}

export default CategoryList;
