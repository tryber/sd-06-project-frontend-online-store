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
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <div data-testid="shopping-cart-product-quantity">
              <ProductQuantity />
            </div>
            <p data-testid="shopping-cart-product-price">{item.price}</p>
          </div>
        )) }
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.shape({
    cartProductList: PropTypes.arrayOf(PropTypes.object),
    cartProductItens: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCartPage;
