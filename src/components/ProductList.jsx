import React, { Component } from 'react';
import Cards from './Cards'
import '../App.css';

class ProductList extends Component {
  
  render() {
    const { items, addtoCart, cartItems } = this.props;

    return (
      <div>
          {items.map((item) =><Cards key={item.id} item={item} addtoCart={ addtoCart }  cartItems={ cartItems }/>)}
      </div>
    );
  }
}

export default ProductList;
