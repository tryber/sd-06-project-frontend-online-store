import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProductSpecs from '../components/ProductSpecs';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductsDetails extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     productCart: [],
  //   };
  //   this.handleAddCart = this.handleAddCart.bind(this);
  // }

  // handleAddCart(product) {
  //   this.setState((prevState) => ({ productCart: [...prevState.productCart, product] }));
  // }

  render() {
    const { location: { state: { element, productCart, handleAddCart } } } = this.props;
    // const { productCart } = this.state;
    console.log(this.props);
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
        <ShoppingCartButton productCart={ productCart } />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductsDetails;
