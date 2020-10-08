import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

class Product extends React.Component {
  render() {
    const { products, updateCart, totalItems } = this.props;
    return (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            details={ product }
            updateCart={ updateCart }
            totalItems={ totalItems }
          />
        ))}
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCart: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default Product;
