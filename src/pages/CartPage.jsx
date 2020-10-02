import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';

class CartPage extends Component {  
  render() {
    // console.log(cart);

    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Carrinho de compras</h1>
        {
          (cart <= 0 )
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map(product => (
            <div key={product.id}>
              <img src={product.thumbnail}/>
              <h2 data-testid="shopping-cart-product-name" >{product.title}</h2>
              <div className="quantidade" >
                <button > - </button>
                <p data-testid="shopping-cart-product-quantity"> 1 </p>
                <button > + </button>
              </div>
              <p>R$ {product.price}</p>
            </div>
          )
          )

        }
      </div>
    );
  }
}

export default CartPage;
