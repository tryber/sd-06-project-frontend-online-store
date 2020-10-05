import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt="foto do produto" />
        <p>{ product.price }</p>
        <Link data-testid="product-detail-link" to={ `/product-details/${product.id}` }>
          <button type="button">DETALHES</button>
        </Link>
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
