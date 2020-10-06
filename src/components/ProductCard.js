import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, quantity } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ product.thumbnail } alt="product" className="product-card-image" />
        <div className="product-card-body">
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <Link
            quantity={quantity}
            data-testid="product-detail-link"
            to={ { pathname: '/product', state: product } }
          >
            DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
