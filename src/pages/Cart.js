import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Cart extends Component {
  render() {
    const { carrinho } = this.props;
    console.log(carrinho);
    if (!carrinho.length) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        {
          carrinho.map((iten) => (
            <div key={ iten.name }>
              <h2 data-testid="shopping-cart-product-name" key={ iten }>
                { iten.title }
              </h2>
              <p data-testid="shopping-cart-product-quantity">
                { iten.quantity }
              </p>
            </div>))
        }
        <Link to="/">
          <button type="button"> Voltar </button>
        </Link>
        <Link to="/ReviewInfo">
          <button data-testid="checkout-products" type="button"> Finalizar </button>
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  carrinho: PropTypes.shape(PropTypes.object).isRequired,
};

export default Cart;
