import React from 'react';
import { Link } from 'react-router-dom';
import ItemShoppingCart from './ItemShoppingCart'


class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.removeItem = this.removeItem.bind(this);
    this.showCart = this.showCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);

    this.state = {
      products: [],
      totalCart: 0,
    }
  }

  componentDidMount() {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList') || '[]');
    if (cartProducts.length > 0) {
      const total = cartProducts.map((item) => (item.quantity * item.price))
        .reduce((result, item) => result + item);
      this.setState({ products: cartProducts, totalCart: total })
    }
  }

  removeItem(id) {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList'));
    const cartProductsFiltered = cartProducts.filter((item) => item.id !== id);
    localStorage.setItem('myCartList', JSON.stringify(cartProductsFiltered));
    this.setState({ products: cartProductsFiltered })
  }

  showCart(item) {
    return (
      <ItemShoppingCart key={item.id} product={item} remove={this.removeItem} />
    )
  }

  emptyCart() {
    return (
      <h1 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h1>
    )
  }

  render() {
    const { products, totalCart } = this.state;
    return (
      <div>
        <div>
          {products.length > 0 ? products.map((item) => this.showCart(item)) : this.emptyCart() }
        </div>
        <div>
          <h3>{`Total R$ ${(totalCart).toFixed(2)}`}</h3>
          {/* IMPORTANTE: Passando o state dentro do link */}
          <Link data-testid="checkout-products" to={{pathname: "/closepurchase", state: { products: products }}}>Fechar Compra</Link>
        </div>
        <Link to="/">Voltar</Link>

      </div>
    );
  }
}

export default ShoppingCart;
