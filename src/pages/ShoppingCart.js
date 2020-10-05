import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { location: { state: { productCart } } } = this.props;
    const emptyCart = 0;
    if (!productCart || productCart.length === emptyCart) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </div>
      );
    }
    return (
      <div>
        {productCart.map(({ title, price, id }) => (
          <div key={ id }>
            <h4 data-testid="shopping-cart-product-name">
              { title }
            </h4>
            <p>
              { price }
            </p>
          </div>
        ))}
        <span
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade de itens:
          {productCart.length}
        </span>
        <br />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ShoppingCart;
