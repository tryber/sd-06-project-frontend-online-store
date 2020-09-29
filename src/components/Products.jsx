import React, { Component } from 'react';
import * as Api from '../services/api'; 

class Products extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
    };
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const getCategories = await Api.getCategories()
      .then(resolve => resolve);
    this.setState({
      name: getCategories,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <nav data-testid="category">
        <ul>
          {name.map(names => <li key={names.id}>{names.nam}</li>)}
        </ul>
      </nav>
    );
  }
}

export default Products;
