import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ShoppingCartButton extends Component {
  constructor() {
    super();
    this.state = {
      isRedirectingToCart: false,
    };

    this.redirectToShoppingCart = this.redirectToShoppingCart.bind(this);
  }

  redirectToShoppingCart() {
    this.setState({ isRedirectingToCart: true });
  }

  render() {
    const { isRedirectingToCart } = this.state;
    if (isRedirectingToCart) return <Redirect to="/shopping-cart" />;
    return (
      <div>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.redirectToShoppingCart }
        >
          Carrinho
        </button>
      </div>
    );
  }
}

export default ShoppingCartButton;
