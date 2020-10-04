import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      allCategories: [],
    }
  }

  async componentDidMount() {
    await api.getCategories()
      .then(response => {
        this.setState({
          allCategories: response,
        });
      });

    await api.getProductsFromCategoryAndQuery()
      .then(response => {
        this.setState({
          allProducts: response,
        });
      })
  }

  render() {
    return (
      <h2>no</h2>
    )
  }
}

export default Home;
