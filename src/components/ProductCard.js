import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { product: { title, thumbnail, price, id }, addProductToCard } = props;
  return (
    <div className="product-card" data-testid="product">
      <h3>{ title }</h3>
      <img src={ thumbnail } alt={ title } />
      <div className="product-card-price">
        R$
        { price }
      </div>
      <div>
        <Link
          data-testid="product-detail-link"
          to={ `/products/${id}` }
        >
          Show details
        </Link>
        <button
          type="button"
          onClick={ () => { addProductToCard(id, title, thumbnail, price); } }
          data-testid="product-add-to-cart"
        >
          Add to cart
        </button>

      </div>
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
  addProductToCard: PropTypes.func.isRequired,
};

export default ProductCard;
