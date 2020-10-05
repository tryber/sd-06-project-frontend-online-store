import React from 'react';
import EmptyBox from '../images/empty-box.png';
import './ShoppingCart.css';

const productAdded = [];

const addProduct = (product) => {
  productAdded.push(product);
  console.log(productAdded)
};


class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
      total: 0,
    };
    this.addToCart = this.addToCart.bind(this);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    console.log(productAdded);
    this.addToCart(productAdded);
  }

  adddToCart(item) {
    const { shoppingCart } = this.state;
    const array = [];
    let productCard;
    item.forEach((item) => {
      productCard = {
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
        quantity: 1,
      };
      array.push(productCard);
      this.setState({ shoppingCart: [...shoppingCart, ...array] });
    });
  }

  render() {
    return (
      <div>
        <img src={EmptyBox} alt="empty-box" className="empty-box" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default { ShoppingCart, addProduct };
