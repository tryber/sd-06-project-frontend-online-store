import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddToCartButton from './AddToCartButton';

import '../styles/ProductsCard.css';

export default class ProductsCard extends Component {
  render() {
    const { product, updateCartListAndItens } = this.props;
    const { title, id, thumbnail, price } = product;
    return (
      <div data-testid="product" className="product-card">
        <h1 className="title-card">{title}</h1>
        <img
          src={ thumbnail }
          alt={ `Produto: ${title}` }
          className="product-card-image"
        />
        <p>{`R$ ${price}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`,
            state: product,
            updateCartListAndItens,
          } }
        >
          Detalhes do Produto
        </Link>
        <AddToCartButton
          product={ product }
          updateCartListAndItens={ updateCartListAndItens }
        />
      </div>
    );
  }
}

// add more fields here if you want
ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  updateCartListAndItens: PropTypes.func.isRequired,
};
