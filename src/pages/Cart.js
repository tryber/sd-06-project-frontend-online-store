import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { carrinho, updateItem } = this.props;
    if (!carrinho.length) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        {
          carrinho.map((item) => (
            <CartItem key={ item.id } item={ item } updateItem={ updateItem } />
          ))
        }
        <Link to="/">
          <button type="button"> Voltar </button>
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  carrinho: PropTypes.shape(PropTypes.object).isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default Cart;
