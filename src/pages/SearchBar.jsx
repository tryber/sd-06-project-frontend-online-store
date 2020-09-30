import React, { Component } from 'react';

import * as api from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="input-text" data-testid="home-initial-message">
          <input type="text" name="input-text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <ul>
          {categories.map((category) => (
            <li data-testid="category" key={ category.id }>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchBar;
