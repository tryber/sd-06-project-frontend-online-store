import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, onClick, value } = this.props;
    const allState = [product, value]

    return (
      <div data-testid="product" className="product-card">
        <img src={ product.thumbnail } alt="product" className="product-card-image" />
        <div className="product-card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="product-card-body">
          <p>
            Preço:
            {product.price}
          </p>
          <div className="product-card-links">
            <Link
              data-testid="product-detail-link"
              to={ { pathname: '/product', state: allState } }
              onClick={onClick}
            >
              DETALHES
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ onClick }
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
