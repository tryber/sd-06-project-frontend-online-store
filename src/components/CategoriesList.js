import React from 'react';
import * as api from '../services/api';
import Loading from './Loading';


class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categ: [],
      load: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categ: categories,
      load: false,
    });
  }

  render() {
    const { load, categ } = this.state;

    return (
      <div>
        <ul>
          { load ? <Loading />
            : categ.map((c) => <li key={ c.id } data-testid="category">{ c.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
