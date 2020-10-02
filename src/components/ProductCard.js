import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{`Preço: R$ ${price}`}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
};

export default ProductCard;
