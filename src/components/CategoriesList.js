import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.listCategory = this.listCategory.bind(this);
  }

  componentDidMount() {
    this.listCategory();
  }

  async listCategory() {
    const cat = await getCategories();
    this.setState({
      categories: cat,
    });
  }

  render() {
    const { categories } = this.state;
    const { onCategoriesSelectChange, selectedCategory } = this.props;
    // console.log('selectedCat:', selectedCategory);
    return (
      <label
        htmlFor="select"
      >
        Selecione tipo de produto
        <select
          id="select"
          onChange={ onCategoriesSelectChange }
          value={ selectedCategory }
        >
          <option aria-label="vazio" key="vazio" value="" />
          { categories.map((el) => (
            <option
              data-testid="category"
              key={ el.id }
              value={ el.id }
            >
              {el.name}
            </option>)) }
        </select>
      </label>
    );
  }
}

export default CategoriesList;
