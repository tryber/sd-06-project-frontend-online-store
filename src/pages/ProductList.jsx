import React, { Component } from 'react';
import * as Api from '../services/api';
import Cards from '../components/Cards';

import '../App.css';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      loading: true,
    };
  }

  componentDidMount() {
    Api.getProductsFromCategoryAndQuery().then((result) => {
      this.setState({
        list: result.results,
        loading: false,
      });
    });
  }

  render() {

    return (
      <div>
        { this.state.list.map((item) => <Cards key={item.id} item={item} />)}
      </div>
    );
  }
} 

export default ProductList;
