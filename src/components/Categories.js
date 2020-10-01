import React from 'react';
import * as api from '../services/api';


class Categories extends React.Component {
  constructor() {
    super();

    this.chooseCategories = this.chooseCategories.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    const categoriesList = [];
    api.getCategories()
      .then((result) => result.forEach((item) => categoriesList.push(item)))
      .then(() => this.setState({
        categories: categoriesList,
      }));
  }

  returnCategories() {
    const { categories } = this.state;
    return categories.map((category) => (
      <button
      data-testid="category"
      key={ category.id }
      type="button"
      id={ category.id }
      onClick={this.chooseCategories}
      >
        { category.name }
      </button>
    ));
  }

  chooseCategories ({ target }) {
    this.setState({ categoryId: target.id})
    fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`)
      .then((response) => response.json())
      .then((result) => console.log(result.results))
      
  }

  render() {
    return (
      <div>
        <p>{this.returnCategories()}</p>
        {/* RETORNAR AQUI A LISTA POR CATEGORIA */}
      </div>
    );
  }
}

export default Categories;
