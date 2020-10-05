import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../pages/shoppingCart';
import { Redirect } from 'react-router-dom';

export default class CreateCart extends Component {
  constructor(props) {
    super(props);
    const { cart } = this.props
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
    this.sumProduct = this.sumProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.Price = this.Price.bind(this);
    this.state = {
      cart,
      totalPrice: '',
    };
  }

  componentDidMount() {
    this.Price()
  }
  async Price() {
    const { cart } = await this.state
    // this.setState({
    //   totalPrice : cart.reduce((previousValue, next) => previousValue + next.price, 0)
    // })
    console.log(cart)
  }

  removeProduct(target, elementId) {
    const product = target.parentNode;
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    const removeLocalStorage = cartLocalStorage.filter((element) => {
      return element.id !== elementId;
    });
    const CartLocal = JSON.stringify(removeLocalStorage);
    localStorage.setItem('cartLocal', CartLocal);
    product.remove();
  }

  sumProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number + 1;
    document.getElementById(element).innerText = result;
    document.getElementById(`${element}price`).innerText = price * result;
  }

  decreaseProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number - 1;
    document.getElementById(element).innerText = result;
    document.getElementById(`${element}price`).innerText = price * result;
  }

  removeLocalStorage() {
    localStorage.removeItem('cartLocal');
  }

  render() {
    const { cart } = this.props;

    return (
      <div data-testid="shopping-cart-empty-message">
        {cart.map((element) => (
          <div key={element.id}>
            <img src={element.thumbnail} alt={element.title} />
            <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
            <button onClick={(e) => this.removeProduct(e.target, element.id)}>
              [X]
            </button>
            <p id={`${element.id}price`}>{element.price}</p>
            <button
              data-testid="product-increase-quantity"
              onClick={(e) =>
                this.sumProduct(e.target, element.id, element.price)
              }
            >
              {' '}
              +{' '}
            </button>
            <button
              data-testid="product-decreate-quantity"
              onClick={(e) =>
                this.decreaseProduct(e.target, element.id, element.price)
              }
            >
              {' '}
              -{' '}
            </button>
            <p id={element.id} data-testid="shopping-cart-product-quantity">
              1
            </p>
          </div>
        ))}
        <div>
          Total price:{this.state.totalPrice}
        </div>
        <button type="button" onClick={this.removeLocalStorage}>
          Deletar todos
        </button>
      </div>
    );
  }
}
CreateCart.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};
