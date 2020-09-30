import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ProductList extends Component {
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

    return (
      <aside>
        <label
          htmlFor="select"
        >
          Selecione tipo de produto
          <select id="select">
            <option aria-label="vazio" key="vazio" value="" />
            { categories.map((el) => (
              <option
                data-testid="category"
                key={ el.id }
              >
                {el.name}
              </option>)) }
          </select>
        </label>
      </aside>
    );
  }
}
export default ProductList;
