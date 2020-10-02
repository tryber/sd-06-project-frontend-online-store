import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <div className="product-card">
          <h5 data-testid="product-detail-name">
            {`${title}`}
            <br />
            <p>
              {`R$:${price}`}
            </p>
          </h5>
          <img src={ thumbnail } alt="Fotografia do Produto" />
        </div>
        <Link
          to={ { pathname: `/product-detail/${id}`, product } }
          data-testid="product-detail-link"
          id="product-card"
        >
          Mais Informações
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,
};

export default Product;
