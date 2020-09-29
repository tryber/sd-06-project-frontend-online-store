import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartImage from '../images/shopping-cart.svg';

export default class ProductListing extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <div>
          <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
          <Link to="/ShoppingCart"><img
            src={shoppingCartImage} alt="Shopping cart button image." width="30px"
            data-testid="shopping-cart-button"
          /></Link>
        </div>
      </div>
    )
  }
}
