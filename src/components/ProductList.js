import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div>
        { products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          addToCart={ addToCart }
        />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
