import React, { Component } from 'react';
import * as api from './services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }
  async componentDidMount() {
    const response = await api.getCategories();
    const resposta = await api.getProductsFromCategoryAndQuery();
    console.log(response);
    this.setState({ category: response });
    this.setState({ category: resposta });
  }

  render() {
    const { category } = this.state;
    console.log(category);

    return (
      <div>
        <p>Categorias</p>
        <div>
          {category.map(({ name, id }) => {
            return (
              <li
                key={id}
                type="radio"
                data-testid="category"
                id="id"
                value={name}
              >
                {name}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
