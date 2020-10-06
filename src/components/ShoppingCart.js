import React from 'react';
import { Link } from 'react-router-dom';
import EmptyBox from '../images/empty-box.png';
import ItemCardCart from './ItemCardCart';
import './ShoppingCart.css';

const productsAdded = [];

const addProduct = (product) => {
  productsAdded.push(product);
  console.log(productsAdded);
};

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.addToCart(productsAdded);
  }

  addToCart(product) {
    const { cart } = this.state;
    const array = [];
    let productCard;
    product.forEach((item) => {
      productCard = {
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
        quantity: 1,
      };
      array.push(productCard);
      this.setState({ cart: [...cart, ...array] });
    });
  }

  render() {
    const { cart } = this.state;
    const zero = 0;
    if (cart.length === zero) {
      return (
        <div>
          <img src={ EmptyBox } alt="empty-box" className="empty-box" />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        { cart.map((item) => <ItemCardCart key={ item.id } product={ item } />) }
        <div>
          <Link data-testid="checkout-products" to="/checkout">Finalizar a compra</Link>
        </div>
      </div>
    );
  }
}

export default { ShoppingCart, addProduct, productsAdded };
