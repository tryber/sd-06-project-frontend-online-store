import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, children, freeShipping } = this.props;

    return (
      <div className="card" data-testid="product">
        <h3 className="product-title">{title}</h3>
        <img className="product-img" src={ thumbnail } alt={ title } />
        <p className="product-price">
          R$
          {' '}
          {price}
        </p>
        {freeShipping && (
          <p className="product-free-shipping" data-testid="free-shipping">
            Frete Gratis!
          </p>
        )}
        { children }
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
