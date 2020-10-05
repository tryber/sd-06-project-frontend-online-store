import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  handleClick({ target }) {
    const { onFilter } = this.props;
    onFilter(target.id, undefined);
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-container">
        <h3>Escolha a categoria:</h3>
        {categories.map((category) => (
          <div key={ category.id } className="category-container">
            <input
              type="radio"
              name="categories"
              id={ category.id }
              onClick={ this.handleClick }// criar a função não precisa ser genérica
              data-testid="category"
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </div>
    )
  }
}

export default CategoryList;
