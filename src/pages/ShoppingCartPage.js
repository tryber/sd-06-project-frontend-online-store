import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductQuantity from '../components/ProductQuantity';

class ShoppingCartPage extends Component {
  render() {
    const { location: { cartProductItens, cartProductList } } = this.props;
    const zero = 0;

    if (cartProductItens === zero) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        </div>
      );
    }

    return (
      <div>
        {cartProductList.map((item) => (
          <div data-testid="shopping-cart-product-name" key={ item.id }>
            <p>{item.title}</p>
            <p data-testid="shopping-cart-product-quantity"><ProductQuantity /></p>
            <p data-testid="shopping-cart-product-price">{item.price}</p>
          </div>
        )) }
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ShoppingCartPage;
