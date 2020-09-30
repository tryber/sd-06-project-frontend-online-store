import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CardsContainer extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            price={ product.price }
            thumbnail={ product.thumbnail }
          />
        ))}
      </div>
    );
  }
}

CardsContainer.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};

export default CardsContainer;
