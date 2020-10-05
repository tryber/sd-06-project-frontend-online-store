import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ShoppingCartButton from '../components/ShoppingCartButton';

import './styles/ProductDetails.css';

class ProductDetails extends Component {
  render() {
    const {
      location: {
        state: { title, thumbnail, price },
      },
      match: {
        params: { productId },
      },
    } = this.props;
    return (
      <div>
        <div className="product-detail-header">
          <Link to="/">Voltar</Link>
          <ShoppingCartButton />
        </div>
        <div data-testid="product-detail-name" className="product-detail">
          <h1>{title}</h1>
          <img src={ thumbnail } alt={ `Detalhes do Produto: ${title}` } />
          <span>{`R$ ${price}`}</span>
          <p>{}</p>
        </div>
        <div className="action">
          <Link
            to={ {
              pathname: '/shopping-cart',
              productId,
            } }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </Link>
        </div>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
