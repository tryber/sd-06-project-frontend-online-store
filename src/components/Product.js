import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

class Product extends React.Component {
  render() {
    const { products, cartItems, addItemToCart } = this.props;
    return (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            details={ product }
            addItemToCart={ addItemToCart }
            cartItems={ cartItems }
          />
        ))}
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Product;
