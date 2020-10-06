import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const product = JSON.parse(localStorage.getItem('cartProducts'));
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
            <p data-testid="shopping-cart-product-quantity">Quantity: 1</p>
          </div>
        )}
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
  };
}

export default ShoppingCart;