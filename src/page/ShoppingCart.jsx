import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      quantity: 1,
    }
  }
  handleIncrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    })
  }
  handleDecrease() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity - 1,
    })
  }

  render() {
    const product = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(product)
    let result = product.reduce((acc, product) => acc + product.price * this.state.quantity, 0);
    const { quantity } = this.state;
    if(!product) return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
    return (
      <div>
        {product.map((item) => 
          <div data-testid="shopping-cart-product-name" key={item.id}>
            <h3>{item.title}</h3>
            <p>{`R$ ${item.price}`}</p>
            <img src={item.thumbnail} alt='Product' />
            <p data-testid="shopping-cart-product-quantity">Quantity: {quantity}</p>
            <button data-testid="product-increase-quantity" onClick={this.handleIncrease}>+</button>
            <button data-testid="product-decrease-quantity" onClick={this.handleDecrease}>-</button>
          </div>
        )}
        <div id='total-price'>
          <p>{`Total no carrinho: R$ ${result}`}</p>
        </div>
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
  };
}

export default ShoppingCart;
