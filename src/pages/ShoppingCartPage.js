import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartPage extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.getAllProductsFromCart = this.getAllProductsFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.getOldCartFromLocalStorage = this.getOldCartFromLocalStorage.bind(
      this,
    );
  }

  componentDidMount() {
    const { location: { state } } = this.props;

    this.getAllProductsFromCart(state);

    if (!state) {
      this.getOldCartFromLocalStorage();
    }
  }

  getOldCartFromLocalStorage() {
    this.setState({
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    });
  }

  getAllProductsFromCart(state) {
    this.setState(
      {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
      },
      () => {
        if (state) {
          const { cart } = this.state;
          const oldProduct = cart.find(
            (product) => product.id === state.id,
          );
          let quantity;

          if (!oldProduct) {
            quantity = 1;
            this.addToCart({
              id: state.id,
              title: state.title,
              price: state.price,
              quantity,
            });
          } else {
            oldProduct.quantity = Number(oldProduct.quantity);
            this.updateCart(oldProduct);
          }
        }
      },
    );
  }

  addToCart(item) {
    this.setState((prevState) => {
      localStorage.setItem('cart', JSON.stringify([...prevState.cart, item]));
      return { cart: [...prevState.cart, item] };
    });
  }

  updateCart(item) {
    this.setState(
      (prevState) => ({
        cart: prevState.cart.filter((product) => product.id !== item.id),
      }),
      () => {
        this.setState((prevState) => ({
          cart: [...prevState.cart, item],
        }));
      },
    );
  }

  render() {
    const { cart } = this.state;
    if (cart.length < 1) {
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
        {cart.map((item) => (
          <div data-testid="shopping-cart-product-name" key={ item.title }>
            <p>{item.title}</p>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <p data-testid="shopping-cart-product-price">{item.price}</p>
          </div>
        ))}

        <button data-testid="shopping-cart-button" type="button">Finalizar compra</button>
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
};

export default ShoppingCartPage;
