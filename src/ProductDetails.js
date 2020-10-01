import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails(props) {
  const { location: { state: { product } } } = props;
  return (
    <div>
      {product.title}
      <br />
      {product.price}
    </div>);
}


ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ProductDetails;
