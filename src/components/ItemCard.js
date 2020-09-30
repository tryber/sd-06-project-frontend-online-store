import React from 'react';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt="foto do produto" />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
