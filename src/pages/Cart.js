import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Cart extends Component {
  render() {
    const { carrinho } = this.props;
    console.log(carrinho);
    if (carrinho.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        {
          carrinho.map((iten) => (
            <div key={ iten }>
              <h2 data-testid="shopping-cart-product-name" key={ iten }>
                Título do produto
              </h2>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade
              </p>
            </div>))
        }
        <Link to="/">
          <button type="button"> Voltar </button>
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  carrinho: PropTypes.array.isRequired,
};

export default Cart;
