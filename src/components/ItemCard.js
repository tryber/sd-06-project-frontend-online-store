import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

class ItemCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="foto do produto" />
        <p>{product.price}</p>
        <Link data-testid="product-detail-link" to={`/product-details/${product.id}`}>
          <button type="button">DETALHES</button>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={() => {
            ShoppingCart.addProduct(product);
          }}
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCard;
