import React, { Component } from 'react';
import { getCategories } from '../services/api';

// comment to commit

class SearchProduct extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <h2>Categorias</h2>
          <ul>
            {categories.map(({ name, id }) => (
              <li data-testid="category" key={ id }>{name}</li>
            ))}

          </ul>
        </div>
        <form>
          <input type="text" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria
          </h1>
        </form>
      </div>
    );
  }
}

export default SearchProduct;
