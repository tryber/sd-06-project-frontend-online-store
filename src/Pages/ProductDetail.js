import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProductDetailComponent from '../Components/ProductDetailComponent';

class ProductDetails extends Component {
  render() {
    const { match, location } = this.props;
    const { params } = match;
    const { idprod } = params;
    const { busca } = location.state;
    const arr = busca.filter((num) => num.id === idprod);
    return (
      <div>
        {arr.map((item) => <ProductDetailComponent product={ item } key={ item.id } />)}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape().isRequired,
  location: propTypes.shape().isRequired,
};

export default ProductDetails;
