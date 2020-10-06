import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.renderShoppingCart = this.renderShoppingCart.bind(this);
  }

  renderShoppingCart() {
    const { location } = this.props;
    const { state } = location;
    if (state.length < 1) {
      return <span>Seu carrinho está vazio.</span>;
    }
    return (
      <div>
        {state.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p data-testid="shopping-cart-product-quantity">{state.length}</p>
            <p data-testid="shopping-cart-product-price">{item.price}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return this.renderShoppingCart();
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
