import React, { Component } from 'react';

export default class CartEmptyMessage extends Component {
  constructor() {
    super();
    this.state = {
      arrayStorage: [],
    };
    this.loadLocalStoge = this.loadLocalStoge.bind(this);
  }

  componentDidMount() {
    this.loadLocalStoge();
  }

  loadLocalStoge() {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList'));
    this.setState({
      arrayStorage: cartProducts || [],
    });
  }

  render() {
    const { arrayStorage } = this.state;
    return (arrayStorage.length >= 1)
      ? (
        <div>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            {`itens no carrinho ${arrayStorage.length}`}
          </p>
          {arrayStorage.map((el) => (
            <div
              key={ el.id }
              className="shop-card"
              data-testid="shopping-cart-product-name"
            >
              <h3>{ el.title }</h3>
              <img src={ el.thumbnail } alt={ el.title } />
              <div className="shop-card-price">
                R$
                {el.price}
              </div>
            </div>))}
        </div>
      )
      : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
  }
}
