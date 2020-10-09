import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h1 className="product-card-title">{product.title}</h1>
        <img
          className="product-card-image"
          src={ product.thumbnail }
          alt="Foto do produto"
        />
        <div className="product-card-body">
          <p>{product.price}</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
          <Link
            to={ {
              pathname: `/ProductDetails/${product.id}`,
              state: product,
            } }
            data-testid="product-detail-link"
          >

            <button type="button">Detalhes do produto</button>
          </Link>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
