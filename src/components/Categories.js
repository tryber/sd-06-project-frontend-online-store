import React from 'react';
import * as api from '../services/api';
import Category from './Category';

class Categories extends React.Component {
  constructor() {
    super();

    this.fecthCategories = this.fecthCategories.bind(this);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fecthCategories();
  }

  async fecthCategories() {
    const fecthData = await api.getCategories();
    this.setState({ data: fecthData });
  }

  render() {
    const { data } = this.state;
    return (
      <aside className="categories">
        <h4 className="titleCategories">Categorias:</h4>
        <form>
          {(data === null)
            ? 'Loading...'
            : data.map((category) => <Category key={ category.id } data={ category } />)}
        </form>
      </aside>
    );
  }
}

export default Categories;
