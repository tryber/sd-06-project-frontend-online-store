import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.renderShoppingCart = this.renderShoppingCart.bind(this);
  }

  renderShoppingCart() {
    const { location } = this.props;
    const { state } = location;
    if (state.length < 1) {
      return <span>Seu carrinho está vazio.</span>
    }
    return (
      <div>
        {state.map(item => (
          <div>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p data-testid="shopping-cart-product-quantity">{state.length}</p>
            <p data-testid="shopping-cart-product-price">{item.price}</p>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { location } = this.props;
    const { state } = location;

    return this.renderShoppingCart();
  }
}

export default ShoppingCart;
