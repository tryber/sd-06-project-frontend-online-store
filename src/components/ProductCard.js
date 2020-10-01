import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section key={ title } data-testid="product" className="product-content">
        <div className="img-div">
          <img className="img" src={ thumbnail } alt={ title } />
        </div>
        <div className="product-details-div">
          <p>{ title }</p>
          <p className="price">{`R$ ${price}`}</p>
        </div>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default ProductCard;
