import React from 'react';
import { Link } from 'react-router-dom';
import EmptyBox from '../images/empty-box.png';
import ItemCardCart from './ItemCardCart';
import Header from './Header';
import './ShoppingCart.css';

const productsAdded = [];

const addProduct = (product) => {
  productsAdded.push(product);
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
          <Header />
          <img src={ EmptyBox } alt="empty-box" className="empty-box" />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/"><button type="button">Voltar</button></Link>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div className="shopping-cart-products">
          { cart.map((item) => <ItemCardCart key={ item.id } product={ item } />) }
        </div>
        <Link to="/"><button type="button">Voltar</button></Link>
        <Link data-testid="checkout-products" to="/checkout">
          <button type="button">Finalizar a compra</button>
        </Link>
      </div>
    );
  }
}

export default { ShoppingCart, addProduct, productsAdded };
