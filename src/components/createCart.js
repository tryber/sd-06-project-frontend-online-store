import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class CreateCart extends Component {
  constructor(props) {
    super(props);
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
    this.sumProduct = this.sumProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      total: '',
    };
  }

  componentDidMount() {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    this.setState({
      total: cartLocalStorage.reduce(
        (previousValue, next) => previousValue + next.price,
        0
      ),
    });
  }

  removeProduct(target, elementId, price) {
    const product = target.parentNode;
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    const removeLocalStorage = cartLocalStorage.filter((element) => {
      return element.id !== elementId;
    });
    const CartLocal = JSON.stringify(removeLocalStorage);
    localStorage.setItem('cartLocal', CartLocal);
    product.remove();
    this.setState({
      total: parseInt(Math.round(this.state.total - price)),
    });
  }

  sumProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number + 1;
    document.getElementById(element).innerText = result;
    document.getElementById(`${element}price`).innerText = price * result;
    this.setState({
      total: Math.round(price + this.state.total),
    });
  }
  decreaseProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number - 1;
    if (result === 0) {
      this.setState({
        total: parseInt(Math.round(this.state.total - price)),
      });
      this.removeProduct(target, element, price);
    } else {
      document.getElementById(element).innerText = result;
      this.setState({
        total: Math.round(this.state.total - price),
      });
    }
  }

  removeLocalStorage() {
    localStorage.removeItem('cartLocal');
  }

  render() {
    const { cart } = this.props;
    return this.state.total === 0 ? (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    ) : (
      <div data-testid="shopping-cart-empty-message">
        {cart.map((element) => (
          <div key={element.id}>
            <img src={element.thumbnail} alt={element.title} />
            <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
            <button
              onClick={(e) =>
                this.removeProduct(e.target, element.id, element.price)
              }
            >
              [X]
            </button>
            <p id={`${element.id}price`}>{element.price}</p>
            <button
              data-testid="product-increase-quantity"
              onClick={(e) =>
                this.sumProduct(e.target, element.id, element.price)
              }
            >
              +
            </button>
            <button
              data-testid="product-decrease-quantity"
              onClick={(e) =>
                this.decreaseProduct(e.target, element.id, element.price)
              }
            >
              -
            </button>
            <p id={element.id} data-testid="shopping-cart-product-quantity">
              1
            </p>
          </div>
        ))}
        <div>{this.state.total}</div>
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
