import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img alt="Imagem do produto" src={ thumbnail } />
        <p>{ price }</p>
        <Link
          to={ { pathname: `/ProductDetails/${id}`, state: { props: product } } }
          data-testid="product-detail-link"
        >
          <button type="button">Detalhes do produto</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
