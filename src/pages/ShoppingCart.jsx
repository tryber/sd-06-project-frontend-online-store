import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.emptyCart = this.emptyCart.bind(this);
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);

  }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  increaseButton() {
    return (
      <button type="button" data-testid="product-increase-quantity">
        +++
      </button>
    );
  }

  decreaseButton() {
    return (
      <button type="button" data-testid="product-decreate-quantity">
        --
      </button>
    );
  }

  // componentDidMount() {
  //   if (this.props.location) {
  //     const { location } = this.props;
  //     const { state } = location;
  //     const { items } = state;
  //     const { title, price, thumbnail } = items;
  //   } else {
  //     const { title } = this.state;
  //     // const { title, price, thumbnail } = this.state.items;
  //   }
  // }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { items } = state;
    const { title, price, thumbnail } = items;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        {this.increaseButton()}
        {this.decreaseButton()}
        <p data-testid="shopping-cart-product-quantity">Quantidade:</p>
        <Link
          to="/"
        >
          <button type="button">Voltar</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
