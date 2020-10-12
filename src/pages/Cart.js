import React from 'react';
import { Link } from 'react-router-dom';
import { cart } from '../services/CartSize';
import returnArrow from '../images/return-arrow.png';
import { CartItem } from '../components';
import '../App.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
  }

  renderProduct(item) {
    return (
      <div className="product-card">
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt="produto" />
        <p>{`Preço: R$ ${item.price}`}</p>
      </div>
    );
  }

  renderCart() {
    if (!cart || cart.length < 1) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {cart.map((item) => (
          <div key={ item.id }>
            <CartItem item={ item } />
          </div>
        ))}
        <Link to="/checkout">
          <button
            type="button"
            data-testid="checkout-products"
            className="checkout-button"
          >
            Finalizar pedido
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
