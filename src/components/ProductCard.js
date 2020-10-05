import React from 'react';
import PropTypes from 'prop-types';


function ProductCard(props) {
  const { product: { title, thumbnail, price } } = props;
  
  return (
    <div className="product-card" data-testid="product">
      <h3>{ title }</h3>
      <img src={ thumbnail } alt={ title } />
      <div className="product-card-price">
        R$
        { price }
      </div>

    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
