import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
  }


  increaseButton() {
    return (
      <button type="button">Aumentar</button>
    );
  }

  decreaseButton() {
    const
  }

  renderShoppingCart() {
    const { location } = this.props;
    const { state } = location;
    if (state.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</span>
      );
    }
    return (
      <div>
        {state.map((item) => (
          <div key={item.id}>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <button onClick={this.decreaseButton} type="button">Diminuir</button>
            <p data-testid="shopping-cart-product-quantity">{state.length}</p>
            <button onClick={this.increaseButton} type="button">Aumentar</button>
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
