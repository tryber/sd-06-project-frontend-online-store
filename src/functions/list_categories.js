import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      categoria: [],
    };
  }

  componentDidMount() {
    this.listCategories();
  }

  async listCategories() {
    const category = await api.getCategories();
    this.setState({ categoria: category });
  }

  render() {
    const { categoria } = this.state;
    return (
      <div>
        <h2>Categorias:</h2>
        <div>
          {categoria.map((item) => (
            <li key={ item.id } data-testid="category">
              {item.name}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryList;
