import React, { Component } from 'react';
// import * as Api from '../services/api';
class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  // componentDidMount() {
  //   this.fetchProducts();
  // }
  // fetchProducts = async (query) => {
  //   const getProducts = await Api.getProductsFromCategoryAndQuery(query)
  //     .then(resolve => resolve.results);
  //   this.setState({
  //     card: getProducts,
  //   });
  // }
  
  // buttonOnClick() {
  // }

  render() {
    // const {  } = this.state;

    return (
      <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
    );
  }
}

export default ProductsList;
