import React, { Component } from 'react';
import Product from './Product';
import * as Api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      product: {},
      response: false,
    }
  }

  render() {
    const { results } = this.state.product;
    const { response } = this.state;
    console.log(results);
  return response ? <p>loading...</p> : <p>ok</p>;
   
  }
}

export default ProductList;