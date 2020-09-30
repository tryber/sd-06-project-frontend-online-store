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
    console.log(this.state.categories)
  }

  handleClick({ target }) {
    console.log(target.value)
  }

  render() {
    const { loading, categories } = this.state;

    return (
      <div>
        <ul>
          { loading ? <Loading />
            : categories.map((category) => (
              <li onClick={this.handleClick} key={ category.id } data-testid="category">{ category.name }</li>)) }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
