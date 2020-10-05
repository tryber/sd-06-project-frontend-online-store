import React, { Component } from 'react';
import propTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Product extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link>
          <div data-testid="product">
            <h5>{ title }</h5>
            <img src={ thumbnail } alt="fotografia do produto" />
            <p><span>{`R$: ${price}`}</span></p>
            <p><Button nameButton="Add to Cart" onClick={ onClick } /></p>
          </div>
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  onClick: propTypes.func.isRequired,
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
  }).isRequired,

};

export default Product;
