import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  renderCart() {
    const { shoppingCart } = this.props;
    if (!shoppingCart.length) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      shoppingCart.map((item) => (
        <span key={ this.id } data-testid="shopping-cart-product-name">
          {item.product.title}
          <img
            src={ item.product.thumbnail }
            alt={ `Imagem do produto ${item.product.title}` }
          />
          <span>
            {item.product.price}
          </span>
          <span data-testid="shopping-cart-product-quantity">
            {item.product.quantity}
          </span>
        </span>
      ))
    );
  }

  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    );
  }
}

ShoppingCart.propTypes = { shoppingCart: PropTypes.string.isRequired };
export default ShoppingCart;
