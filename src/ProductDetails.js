import React from 'react';
import PropTypes from 'prop-types';
import IconCart from './IconCart';

function ProductDetails(props) {
  const { location: { state: { product, quantityOnCart } } } = props;
  return (
    <div>
      { IconCart(quantityOnCart) }
      <p data-testid="product-detail-name">{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}


ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.object.isRequired,
      quantityOnCart: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ProductDetails;
