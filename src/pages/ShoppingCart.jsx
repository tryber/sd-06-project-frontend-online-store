import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import '../styles/ShoppingCart.css';
import cart from '../img/cart.png';
import goHome from '../img/back.png';
import empytCart from '../img/empty-cart.png';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    }

    this.buildCartFromStorage = this.buildCartFromStorage.bind(this);
  }

  buildCartFromStorage() {
    if (localStorage.getItem('cart')) {
      const save = JSON.parse(localStorage.getItem('cart'));
      this.setState({ products: save });
    } 
  }
    
  componentDidMount() {
    this.buildCartFromStorage()
  }
    
  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="icon-box">
          <Link to="/">
            <img src={ goHome } alt="imagem voltar para home" />
          </Link>
          <Link to="/cart">
            <img src={ cart } alt="imagem do carrinho" />
            <span>Carrinho de Compras</span>
          </Link>
        </div>
        {
          (products.length > 0) && (
            <div>
              <ProductList products={ products } emptyList={ false }/>
            </div>
          )
        }
        {
          (products.length === 0) && (
            <div className="empty-cart">
              <img src={ empytCart } alt="carrinho vazio" />
              <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default ShoppingCart;
