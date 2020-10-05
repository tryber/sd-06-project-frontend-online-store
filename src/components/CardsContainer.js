import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CardsContainer extends Component {
  render() {
    const { setProductCart } = this.props;

    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <ProductCard
            setProductCart={ setProductCart }
            key={ product.id }
            id={ product.id }
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
  products: PropTypes.arrayOf.isRequired,
  setProductCart: PropTypes.func.isRequired,
};

export default CardsContainer;
