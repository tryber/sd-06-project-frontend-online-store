import React, { Component } from 'react';
import * as Api from '../services/api'; 

class Products extends Component {
  constructor() {
    super();

    this.state = {
      category: [],
    };
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const getCategories = await Api.getCategories()
      .then(resolve => resolve);
    this.setState({
      category: getCategories,
    });
  }

  render() {
    const { category } = this.state;
    return (
      <nav>
        <ul>
          {category.map(names => <li data-testid="category" key={names.id}>{names.name}</li>)}
        </ul>
      </nav>
    );
  }
}

export default Products;
