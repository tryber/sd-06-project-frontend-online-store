import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CardsContainer extends Component {
  render() {
    const { setProductCart, products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <ProductCard
            setProductCart={ setProductCart }
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
  setProductCart: PropTypes.func.isRequired,
};

export default CardsContainer;
