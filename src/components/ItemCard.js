import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ItemCard.css';

class ItemCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <img src={ product.thumbnail } alt="foto do produto" className="product-image" />
        <h2>{ product.title }</h2>
        <p>{ product.price }</p>
        <Link data-testid="product-detail-link" to={ `/product-details/${product.id}` }>
          <button type="button" className="details-button">DETALHES</button>
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
