import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoriesListing extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState(
      { loading: true },
      async () => {
        const allCategories = await api.getCategories();
        this.setState({
          categories: allCategories,
          loading: false,
        });
      },
    );
  }

  renderCategories() {
    const { onClick } = this.props;
    const { categories } = this.state;
    return categories.map((category) => <button onClick={onClick} name={category.name} key={category.id} data-testid="category">{category.name}</button>);
  }
  
  render() {
    const { loading } = this.state;
    const { renderCategories } = this;

    return (
    <form>
      {loading ? <span>Loading...</span> : renderCategories()}
    </form>
    )
  }
}
