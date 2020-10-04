import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

class Product extends React.Component {
  constructor() {
    super();

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(item) {
    const { addToCart } = this.props;
    addToCart(item);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            details={ product }
            addItem={ this.addItemToCart }
          />
        ))}
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func,
};

Product.defaultProps = {
  addToCart: () => 1,
};

export default Product;
