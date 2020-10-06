import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

function ProductsList(props) {
  const { products, addProductToCard } = props;

  return (products.length >= 1)
    ? (
      <ul className="productsList-container">
        {products.map((product) => (
          <li key={ product.id }>
            <ProductCard product={ product } addProductToCard={ addProductToCard } />
          </li>
        ))}
      </ul>
    )
    : (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductToCard: PropTypes.func.isRequired,
};

export default ProductsList;
