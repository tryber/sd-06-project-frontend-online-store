import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
    this.addShoppingCart = this.addShoppingCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <button type="button">
          <Link to="/">Página inicial</Link>
        </button>
      </div>
    );
  }

  increaseButton() {
    return (
      <button type="button" data-testid="product-increase-quantity">
        +++
      </button>
    );
  }

  decreaseButton() {
    return (
      <button type="button" data-testid="product-decreate-quantity">
        ---
      </button>
    );
  }

  addShoppingCart(cartItem) {
    return (
      cartItem.map((product) => (
        <div key={ product.id }>
          <div>
            <p data-testid="shopping-cart-product-name">
              {product.name}
            </p>
          </div>
        </div>
      )));
  }

  render() {
    const { location: { state: { cartItem, cartCount } } } = this.props;
    const icaro = 0;
    if (cartItem.length === icaro) return (this.emptyCart());
    return (
      <div>
        {this.addShoppingCart(cartItem)}
        <div data-testid="shopping-cart-product-quantity">
          <p>
            { cartCount }
          </p>
        </div>
        {this.increaseButton()}
        {this.decreaseButton()}
        <button type="button">
          <Link to="/">Página inicial</Link>
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItem: PropTypes.arrayOf.isRequired,
      cartCount: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ShoppingCart;
