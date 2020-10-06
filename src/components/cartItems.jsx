import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {
  render() {
    const product = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        {product.map((item) => 
          <div key={item.id}>
            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <p>{`R$ ${item.price}`}</p>
            <p data-testid="shopping-cart-product-quantity">{1}</p>
          </div>
        )}
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
  }
}

export default CartItems;
