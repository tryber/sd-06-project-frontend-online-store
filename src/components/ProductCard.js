import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div data-testid="product">
        <h1>{product.title}</h1>
        <img src={ product.thumbnail } alt="Foto do produto" />
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
