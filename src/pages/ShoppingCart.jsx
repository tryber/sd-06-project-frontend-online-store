import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.css';
import cart from './../img/cart.png';
import goHome from './../img/back.png';
import empytCart from './../img/empty-cart.png';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
    }
  }

  componentDidMount() {
    if(localStorage.getItem('cart')) {
      const productList = JSON.parse(localStorage.getItem('cart'));
      this.setState({
        productList,
      })
    }
  }

  headerMount() {
    return(
      <div>
          <div className="icon-box">
            <Link to="/"><img src={ goHome } alt="imagem voltar para home" /></Link>
            <Link to="/cart"><img src={ cart } alt="imagem do carrinho" data-testid="shopping-cart-button" /><span>Carrinho de Compras</span></Link>
          </div>
      </div>
    );
  }

  render() {
    if(!localStorage.getItem('cart')) {
      return (
        <Fragment>
          <this.headerMount />
          <div className="empty-cart">
            <img src={ empytCart } alt="carrinho vazio" />
            <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          </div>
        </Fragment>
      );
    } else { 
      return (
        <div className="product-on-cart">
            <this.headerMount />
            {this.state.productList.map(product => <div><h3 data-testid="shopping-cart-product-name">{product.title}</h3><h5 data-testid="shopping-cart-product-quantity">{product.quantity}</h5></div>)}
        </div>
      );
    }
  }
}

export default ShoppingCart;
