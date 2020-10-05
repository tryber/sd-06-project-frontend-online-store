import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductSpecs from '../components/ProductSpecs';

class ProductsDetails extends Component {
  render() {
    const { location: { state: { element } } } = this.props;
    return (
      <div>
        <ProductSpecs details={ element } />
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductsDetails;
