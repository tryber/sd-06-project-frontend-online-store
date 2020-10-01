import React, { Component } from 'react';
import Product from './Product';
import * as Api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      product: '',
      response: false,
    }
  }

  componentDidMount() {
    this.setState({ product: this.handleOnclick() })
  }
  
  async handleOnclick() {
    const response = await Api.getProductsFromCategoryAndQuery(undefined, this.state.userInput);
    console.log(response);
  }

  render() {
    const { response } = this.state;
    console.log(this.state.product);
  return response ? <p>loading...</p> : <p>ok</p>;
   
  }
}

export default ProductList;