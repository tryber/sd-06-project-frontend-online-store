import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartPage extends Component {
  
  render() {
    const { cartItems } = this.props
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Carrinho de compras</h1>
        {
          (cartItems.length <= 0 )
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cartItems.map(cart => (
            <div>
              <img src={cart.thumbnail}/>
              <h2 data-testid="shopping-cart-product-name" >{cart.title}</h2>
              <div className="quantidade" >
                <button > - </button>
                <p data-testid="shopping-cart-product-quantity"> 1 </p>
                <button > + </button>
              </div>
              <p>R$ {cart.price}</p>
            </div>
          )
          )

        }
        
      </div>
    );
  }
}

export default CartPage;
