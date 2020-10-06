import React from 'react';

class CartItem extends React.Component {
  constructor() {
    super();
    
    this.quantityHandler = this.quantityHandler.bind(this);

    this.state = {
      quantity: 1,
      totalValue: undefined,
    }
  }

  quantityHandler({ target }) {
    const { name } = target;
    const { quantity } = this.state;
    if (name === "decreate") {
      if (quantity > 0) {
        this.setState((previousState) => ({
          quantity: previousState.quantity - 1,
        }));
      }
    }

    if (name  === "increase") {
      this.setState((previousState) => ({
        quantity: previousState.quantity + 1,
      }));
    }
  }

  render() {
    const { item } = this.props;
    const { quantity, totalValue } = this.state;
    return (
      <div className="product-card">
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt="produto" />
        <p>{`Preço: R$ ${item.price}`}</p>
        <button
          data-testid="product-decreate-quantity"
          name="decreate"
          onClick={this.quantityHandler}
        >
          -
        </button>
        <span>{`${quantity}`}</span>
        <button
          data-testid="product-increase-quantity"
          name="increase"
          onClick={this.quantityHandler}
        >
          +
        </button>
        <span>{`R$ ${totalValue}`}</span>
      </div>
    );
  }
}

export default CartItem;