import React from 'react';
import { Link } from 'react-router-dom';
import returnArrow from '../images/return-arrow.png';
import { CartItem } from '../components';

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
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    if (!cart) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {cart.map((item) => (
          <div key={ item.id }>
            <CartItem item={ item } />
          </div>
        ))}
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
