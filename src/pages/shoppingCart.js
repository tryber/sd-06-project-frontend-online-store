import React, { Component } from 'react';

export default class shoppingCart extends Component {
  constructor() {
    super();
    this.localStorageMount = this.localStorageMount.bind(this);
    this.state = {
      cart: [],
      // products: [],
    };
  }

  componentDidMount() {
    this.localStorageMount();
  }

  async localStorageMount() {
    const cartLocalStorage = await JSON.parse(
      localStorage.getItem('cartLocal'),
    );
    this.setState({
      cart: cartLocalStorage,
    });
  }

  render() {
    const { cart } = this.state;
    return cart === null ? (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    ) : (
      <div>
        <div data-testid="shopping-cart-empty-message">
          {cart.map((element) => (
            <div key={ element.id }>
              <img src={ element.thumbnail } alt={ element.title } />
              <h3 data-testid="shopping-cart-product-name">{element.title}</h3>
              <p>
                R$
                {element.price}
              </p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={ () => {
            localStorage.removeItem('cartLocal');
          } }
        >
          Deletar todos
        </button>
      </div>
    );
  }
}
