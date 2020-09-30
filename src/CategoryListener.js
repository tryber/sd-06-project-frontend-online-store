import React from 'react';
import * as api from './services/api';

class CategoryListener extends React.Component {
  constructor() {
    super();
    this.state = {
      apiCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ apiCategories: categories }));
  }

  render() {
    const { apiCategories } = this.state;
    console.log(apiCategories);
    return (
      <section>
        {apiCategories.map((category) => (
          <div key={ category.id } data-testid="category">
            console.log(category.id)
            <input type="radio" name="categories" id={ category.id } />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </section>
    );
  }
}

export default CategoryListener;
