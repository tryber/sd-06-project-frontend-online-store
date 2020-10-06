import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductEvaluation from '../components/ProductEvaluation';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ `${title} - ${price}$` }</h2>
        <img src={ thumbnail } alt="product" />
        <h3>Especificações Técnicas</h3>
        <ul>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <li>Especificacoes</li>
          <ProductEvaluation />
        </ul>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
