import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ShoppingCartButton from '../components/ShoppingCartButton';

import './styles/ProductDetails.css';
import AddToCartButton from '../components/AddToCartButton';

class ProductDetails extends Component {
  render() {
    const {
      location: {
        state: { title, thumbnail, price },
        updateCartListAndItens,
      },
      match: {
        params: { productId },
      },
    } = this.props;

    const product = {
      id: productId,
      title,
      price,
    };
    const details = true;
    return (
      <div>
        <div className="product-detail-header">
          <Link to="/">Voltar</Link>
          <ShoppingCartButton updateCartListAndItens={ updateCartListAndItens } />
        </div>
        <div data-testid="product-detail-name" className="product-detail">
          <h1>{title}</h1>
          <img src={ thumbnail } alt={ `Detalhes do Produto: ${title}` } />
          <span>{`R$ ${price}`}</span>
          <p>{}</p>
        </div>
        <AddToCartButton
          product={ product }
          details={ details }
          updateCartListAndItens={ updateCartListAndItens }
        />
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
  updateCartListAndItens: PropTypes.func.isRequired,
};

export default ProductDetails;
