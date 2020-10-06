import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Product from '../components/Product';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    const { handleCartItems, removeItem, cart: { products } } = this.props;
    console.log(products);
    return (
      <div className="cart">
        <Header />
        <div id="home-link">
          <Link id="home-button" to="/">
            <FaHome />
          </Link>
        </div>
        <h1 id="cart-title">
          Seu Carrinho de Compras
        </h1>
        <div className="cart-space">
          <div className="cart-product">
            {(products && products.length > 0)
              ? products.map((product) => (<Product
                removeItem={ removeItem }
                handleCartItems={ handleCartItems }
                bt="cart"
                key={ product.id }
                data={ product }
              />))
              : <h3 id="cart-empty-text" data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>}
          </div>
        </div>
        <div id="total-text">
          <h6>Total da Compra:</h6>
        </div>
        <div>
          <button type="button">Finalizar Compra</button>
        </div>
      </div>
    );
  }
}

export default Cart;
