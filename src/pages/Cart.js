import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor() {
    super();

    this.getShoppingCartProducts = this.getShoppingCartProducts.bind(this);

    this.state = {
      isEmpty: true,
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.getShoppingCartProducts();
  }

  getShoppingCartProducts() {
    if (localStorage.cart) {
      const shoppingCart = JSON.parse(localStorage.cart);
      this.setState({
        isEmpty: false,
        cartProducts: shoppingCart,
      });
    } else {
      this.setState({ isEmpty: true });
    }
  }

  render() {
    const { isEmpty, cartProducts } = this.state;

    return (
      (isEmpty)
        ? (
          <div>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        )
        : (
          <div>
            {cartProducts.map((item) => (
              <div key={ item.id }>
                <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  Quantity:
                  {item.amount}
                </span>
              </div>
            ))}
            <Link to="/checkout">
              <button type="button" data-testid="checkout-products">Checkout</button>
            </Link>
          </div>
        )
    );
  }
}

export default Cart;
