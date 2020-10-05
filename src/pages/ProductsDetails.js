import React, { Component } from 'react';
import ProductSpecs from '../components/ProductSpecs';

class ProductsDetails extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(this.props.details);
    return (
      <div>
        <ProductSpecs />
      </div>
    )
  }
}

export default ProductsDetails;
