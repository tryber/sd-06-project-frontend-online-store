import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsCard from './ProductsCard';

import '../styles/ProductList.css';

export default class ProductList extends Component {
  render() {
    const { queryInput,
      foundItems,
      products,
      categoryInput, updateCartListAndItens } = this.props;
    const zero = 0;
    return (
      <div className="product-list">
        {/* if there is not anything in query input, render this block */}
        {queryInput === '' && categoryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {/* if there are no product found from API, render this block */}
        {queryInput !== '' && !foundItems && (
          <p data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </p>
        )}
        {/* if there are products, render this block */}
        {Object.keys(products).length !== zero
          && products.map((product) => (
            <ProductsCard
              key={ product.id }
              product={ product }
              updateCartListAndItens={ updateCartListAndItens }
            />
          ))}
      </div>
    );
  }
}

ProductList.defaultProps = {
  foundItems: false,
};

ProductList.propTypes = {
  queryInput: PropTypes.string.isRequired,
  categoryInput: PropTypes.string.isRequired,
  foundItems: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
