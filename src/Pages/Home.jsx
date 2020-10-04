import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: api.getProductsFromCategoryAndQuery(),
      allCategories: api.getCategories(),
    }
  }

  render() {
    console.log(this.state.allCategories);
    return (
      <h2>no</h2>
    )
  }
}

export default Home;
