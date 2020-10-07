import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryFilter extends Component{
  
  constructor() {
    super();
    this.test = this.test.bind(this);

    this.state = {
      categories: []
    }
  }
  
  async test() {
    const test = await api.getCategories();
    this.setState({
      categories: test
    });
  }

  componentDidMount() {
    this.test();
  }

  render() {
    const { categories } = this.state

    return (
      <div>
        {categories.map(category => 
          <label htmlFor={category.id} key={category.id}>
            <input type="radio" id={category.id} data-testid="category" name="category" value={category.id} onClick={() => this.props.category(category.id)} />
            {category.name}
          </label>)}
      </div>
    )
  }
}

export default CategoryFilter;
