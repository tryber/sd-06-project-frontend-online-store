import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { product: { title, thumbnail, price, id } } = props;
  return (
    <div className="product-card" data-testid="product">
      <h3>{ title }</h3>
      <img src={ thumbnail } alt={ title } />
      <div className="product-card-price">
        R$
        { price }
      </div>
      <Link
        data-testid="product-detail-link"
        to={ `/products/${id}` }
      >
        Show details
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
