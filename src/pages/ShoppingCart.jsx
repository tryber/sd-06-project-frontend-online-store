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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    if (target.value === '+') {
      console.log('somar');
    }
    if (target.value === '-') {
      console.log('subtrair');
    }
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
      <button
        value="+"
        onClick={ this.handleClick }
        type="button"
        data-testid="product-increase-quantity"
      >
        ( + )
      </button>
    );
  }

  decreaseButton() {
    return (
      <button
        value="-"
        onClick={ this.handleClick }
        type="button"
        data-testid="product-decreate-quantity"
      >
        ( - )
      </button>
    );
  }

  addShoppingCart(cartItem, cartCount) {
    return (
      cartItem.map((product) => (
        <div key={ product.id }>
          <div>
            <p data-testid="shopping-cart-product-name">
              {product.name}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              { cartCount }
            </p>
          </div>
        </div>
      )));
  }

  render() {
    const { cartItem, cartCount } = this.props;
    if (!cartItem.length) return (this.emptyCart());
    return (
      <div>
        {this.addShoppingCart(cartItem, cartCount)}
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
  cartItem: PropTypes.arrayOf.isRequired,
  cartCount: PropTypes.string.isRequired,
};

export default ShoppingCart;
