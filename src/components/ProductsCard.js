import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/ProductsCard.css';

export default class FoundProducts extends Component {
  render() {
    const { product } = this.props;
    const { title, id, thumbnail, price } = product;
    return (
      <div data-testid="product" className="product-card">
        <h1 className="title-card">{title}</h1>
        <img src={ thumbnail } alt={ `Produto: ${title}` } className="product-card-image"/>
        <p>{`R$ ${price}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`, state: product } }
        >
          Detalhes do Produto
        </Link>
      </div>
    );
  }
}

// add more fields here if you want
FoundProducts.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
