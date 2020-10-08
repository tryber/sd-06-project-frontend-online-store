import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductSpecs from '../components/ProductSpecs';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductsDetails extends Component {
  render() {
    const { location: { state: { element } } } = this.props;
    const { handleAddCart } = this.props;

    return (
      <div>
        <ProductSpecs details={ element } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => handleAddCart(element) }
        >
          Adicionar
        </button>
        <ShoppingCartButton />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductsDetails;
