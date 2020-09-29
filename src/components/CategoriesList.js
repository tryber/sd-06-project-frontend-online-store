import React from 'react';
import * as api from '../services/api';
import Loading from './Loading';


class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  render() {

    const { loading, categories } = this.state;

    return (
      <div>
        <ul>
          {loading ? <Loading /> :
            categories.map((category) => <li key={category.id} data-testid="category">{category.name}</li>)}
        </ul>
      </div>
    )
  };
}

export default CategoriesList;
