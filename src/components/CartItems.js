import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItems extends Component {
  setShoppingCart(productCart) {
    const arrayEmpty = 0;
    if (productCart.length > arrayEmpty) {
      return productCart.map((product) => (
        <div style={ { background: 'yellow' } } key={ product.id }>
          <h3
            style={ { color: 'red' } }
          >
            {product.name}
          </h3>
          <h3
            style={ { color: 'blue' } }
          >
            { product.countTotal }
          </h3>
        </div>
      ));
    }
    return (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>
    );
  }

  render() {
    const { productCart } = this.props;

    return (
      <div>
        {this.setShoppingCart(productCart)}
      </div>
    );
  }
}

CartItems.propTypes = {
  productCart: PropTypes.arrayOf.isRequired,
};

export default CartItems;
