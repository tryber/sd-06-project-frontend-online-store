import React, { Component } from 'react';
import Cards from './Cards'
import '../App.css';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  
  render() {
    const { items, addtoCart } = this.props;

    return (
      <div>
          {items.map((item) =><Link to={ { pathname: `/carddetail`, state: item } } className="card-detail" data-testid="product-detail-link"><Cards key={item.id} item={item} addtoCart={ addtoCart } /></Link>)}
      </div>
    );
  }
}

export default ProductList;
