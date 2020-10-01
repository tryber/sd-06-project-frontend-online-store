import React, { Component } from 'react';
import Cards from './Cards'
import '../App.css';

class ProductList extends Component {
  
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item) => <Cards key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ProductList;
