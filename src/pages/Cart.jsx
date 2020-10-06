import React, { Component } from 'react';
import Product from '../components/Product';

class Cart extends Component {
  // constructor() {
  //   super();
  //   this.localStorageSave = this.localStorageSave.bind(this);
  //   this.state = {
  //     cartList: null,
  //   };
  // }

  // componentDidMount() {
  //   this.localStorageSave();
  // }

  // getLocalStorageProduct() {
  //   return JSON.parse(localStorage.getItem('cart'));
  // }

  // localStorageSave() {
  //   const cartLocalStorage = this.getLocalStorageProduct();
  //   this.setState({ cartList: cartLocalStorage });
  // }

  render() {
    const { cart: { products} } = this.props;
    console.log(products);
    return (
      <div className="cart-product">
        {(products)
          ? products
            .map((product) => <Product bt="cart" key={ product.id } data={ product } />)
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

export default Cart;
