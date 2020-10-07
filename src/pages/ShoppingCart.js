import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { cartList } = this.props;
    const emptyCart = 0;
    if (!cartList || cartList.length === emptyCart) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Voltar</Link>
        </div>
      );
    }
    return (
      <div>
        {cartList.map(({ title, price, id, ammount }) => (
          <div key={ id }>
            <h4 data-testid="shopping-cart-product-name">
              { title }
            </h4>
            <p>
              {`R$ ${price}`}
            </p>
            <p>
              {`Qtd de Itens ${ammount}`}
            </p>
          </div>
        ))}
        <span
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade de itens:
          {cartList.map((element) => element.ammount)
            .reduce((acc, currentValue) => acc + currentValue)}
        </span>
        <br />
        {cartList.map(({ price, ammount }) => price * ammount)
          .reduce((acc, currentValue) => acc + currentValue).toFixed(2)}
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
