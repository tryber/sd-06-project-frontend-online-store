import React from 'react';
import PropTypes from 'prop-types';

function isFreeShipping(freeShipping) {
  if (freeShipping) {
    return (<p data-testid="free-shipping">Frete Gratis</p>);
  }
}

function ProductDetails(props, handleCart, productsOnCart) {
  const { location: { state: { product } } } = props;
  const { id, title, price } = product;
  const productIsOnCart = productsOnCart.find((cartProduct) => cartProduct.id === id);
  let disabledOption;
  if (productIsOnCart === undefined) {
    disabledOption = (product.available_quantity < 1);
  } else {
    disabledOption = (productIsOnCart.available_quantity
      < productIsOnCart.quantityOnCart);
  }
  return (
    <div>
      <p data-testid="product-detail-name">{title}</p>
      <p>{price}</p>
      {isFreeShipping(product.shipping.free_shipping)}
      <button
        type="button"
        name="productsOnCart/add"
        data-testid="product-detail-add-to-cart"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        operation="add"
        disabled={ disabledOption }
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
