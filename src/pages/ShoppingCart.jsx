import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.renderMyClickedProducts = this.renderMyClickedProducts.bind(this);
  }

  
  renderMyClickedProducts(product) {
    const { id, title, quantity, price } = product;
    return (
      <div className="product-card" key={id}>
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        <p>{`Un. R$ ${(price).toFixed(2)}`}</p>
        <p>{`Total R$ ${(price * quantity).toFixed(2)}`}</p>
        <p data-testid="shopping-cart-product-quantity">Number: {quantity}</p>
      </div>
    )
  }

  render () {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList') || '[]');
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
        </h1>
        <div>
          {cartProducts.map((item) =>  this.renderMyClickedProducts(item))}
        </div>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
