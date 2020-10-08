import React, { Component } from 'react';
import * as api from './services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      category: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const response = await api.getCategories();
    this.setState({
      categories: response,
    });
  }

  handleClick({ target }) {
    const { handleCategory, handleClickCategory } = this.props;
    const targetId = target.id;
    handleClickCategory(targetId);
    this.setState({
      category: targetId,
    }, () => {
      const { category } = this.state;
      handleCategory(category);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-container" >
        {categories.map((categoria, id) => (
          <div className="category-element" key={id}>
            <label>
              <input
                htmlFor={id}
                data-testid="category"
                type="checkbox"
                id={categoria.id}
                onClick={ this.handleClick }
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
