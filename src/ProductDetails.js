import React from 'react';
import PropTypes from 'prop-types';
import ProductEvaluator from './ProductEvaluator';

function ProductDetails(props) {
  const { location: { state: { product } } } = props;
  return (
    <div>
      <p data-testid="product-detail-name">{product.title}</p>
      <br />
      {product.price}
      <ProductEvaluator />
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
