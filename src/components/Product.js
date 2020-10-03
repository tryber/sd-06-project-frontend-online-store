import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

class Product extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </div>
    );
  }
}

Product.propTypes = { products: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Product;
