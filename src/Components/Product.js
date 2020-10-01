import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Product extends Component {
  render() {
    const { product, search } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Link
        to={ {
          pathname: `/product-detail/${id}`,
          state: {
            busca: search,
          },
        } }
      >
        <div data-testid="product-detail-link">
          <div data-testid="product">
            <h5>{ title }</h5>
            <img src={ thumbnail } alt="fotografia do produto" />
            <span>{`R$: ${price}`}</span>
          </div>
        </div>
      </Link>
    );
  }
}

Product.propTypes = {
  search: propTypes.instanceOf(Array).isRequired,
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,

};

export default Product;
