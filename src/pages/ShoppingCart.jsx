import React from 'react';
import { Link } from 'react-router-dom';
import ItemShoppingCart from './ItemShoppingCart'


class ShoppingCart extends React.Component {
  constructor(){
    super();

    this.removeItem = this.removeItem.bind(this);

    this.state = {
      products: [],
      totalCart: 0,
    }
  }

  componentDidMount() {
    const cartProducts = JSON.parse(localStorage.getItem('myCartList') || '[]');
    const total = cartProducts.map((item) => (item.quantity * item.price))
      .reduce((result, item) => result + item);

    this.setState({ products: cartProducts, totalCart: total })
  }
  
  removeItem(id){
    const cartProducts = JSON.parse(localStorage.getItem('myCartList'));
    const cartProductsFiltered = cartProducts.filter((item) => item.id !== id);
    localStorage.setItem('myCartList', JSON.stringify(cartProductsFiltered));
    this.setState({ products: cartProductsFiltered })
  }

  render () {
    const { products, totalCart } = this.state;
    console.log(totalCart);
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
        </h1>
        <div>
          {products.length > 0 ?
            products.map((item) =>
              <ItemShoppingCart key={item.id} product={item} remove={this.removeItem} />) : null}
        </div>
        <div>
          <h3>{`Total R$ ${(totalCart).toFixed(2)}`}</h3>
        </div>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
