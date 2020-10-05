import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductDetails extends Component {
  render() {
    const { location: { state: {
      title,
      thumbnail,
      price } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ `Detalhes do Produto: ${title}` } />
        <span>{`R$ ${price}` }</span>
        <p>{}</p>
        <ShoppingCartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetails;
