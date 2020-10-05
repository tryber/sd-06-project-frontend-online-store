import React from 'react';
import PropTypes from 'prop-types';

function isFreeShipping(freeShipping) {
  if (freeShipping) {
    return (<p data-testid="free-shipping">Frete Gratis</p>);
  }
}

function ProductDetails(props, handleCart) {
  const { location: { state: { product } } } = props;
  return (
    <div>
      <p data-testid="product-detail-name">{product.title}</p>
      <p>{product.price}</p>
      {isFreeShipping(product.shipping.free_shipping)}
      <button
        type="button"
        name="productsOnCart/add"
        data-testid="product-detail-add-to-cart"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        operation="add"
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
