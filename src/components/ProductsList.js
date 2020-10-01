import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

function ProductsList(props) {
  const { products } = props;

  return (
    <ul className="productsList-container">
      {products.map((product) => (
        <li key={ product.id }>
          <ProductCard product={ product } />
        </li>
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
