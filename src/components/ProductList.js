import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    const { products, addFromList, query } = this.props;
    return (
      <div>
        {products
          .map((product) => (
            <ProductItem
              key={ product.id }
              handleClick={ addFromList }
              product={ product }
              query={ query }
            />
          ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  addFromList: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductList;
