import React from 'react';
import * as api from '../services/api';

class Product extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="product-group">
        <div>
          <h4 className="product-title">{data.title}</h4>
          <img src={data.thumbnail} alt={data.title} />
          <div>{data.price}</div>
        </div>
      </div>
    );
  }
}

export default Product;
