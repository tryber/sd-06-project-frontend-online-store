import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, addFromList } = this.props;
    return (
      <div>
        {products
          .map((product) => <ProductItem key={ product.id } handleClick={ addFromList } product={ product } />)}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  addFromList: PropTypes.func.isRequired,
};

export default ProductList;
