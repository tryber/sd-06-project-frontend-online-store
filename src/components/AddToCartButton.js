import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartPage from '../pages/ShoppingCartPage';

class AddToCartButton extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Link to={ { pathname: `/shopping-cart`, state: product } } >
          <button data-testid="product-add-to-cart">Adicionar ao carrinho</button>
        </Link>
      </div>
    );
  }
}

export default AddToCartButton;