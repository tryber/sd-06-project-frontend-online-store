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
            id={ product.id }
            key={ product.id }
            product={ product }
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
