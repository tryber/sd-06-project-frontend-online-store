import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails(props, handleCart) {
  const { location: { state: { product } } } = props;
  return (
    <div>
      <p data-testid="product-detail-name">{product.title}</p>
      <p>{product.price}</p>
      <button
        type="button"
        name="productsOnCart"
        data-testid="product-detail-add-to-cart"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}


ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};


export default ProductDetails;
