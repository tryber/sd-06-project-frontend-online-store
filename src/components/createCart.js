import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const result = cartLocalStorage.reduce((previousValue, next) => previousValue + next.price, 0);
    this.setStateTotal(result);
  }

  setStateTotal(element) {
    this.setState({
      total: element,
    });
  }

  removeProduct(target, elementId, price) {
    const { total } = this.state;
    const product = target.parentNode;
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    const removeLocalStorage = cartLocalStorage.filter((element) => element.id !== elementId);
    const CartLocal = JSON.stringify(removeLocalStorage);
    localStorage.setItem('cartLocal', CartLocal);
    product.remove();
    const result = Math.round(total - price);
    this.setStateTotal(result);
  }

  sumProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const quandity = number + 1;
    document.getElementById(element).innerText = quandity;
    document.getElementById(`${element}price`).innerText = price * quandity;
    const result = Math.round(price + this.state.total);
    this.setStateTotal(result);
  }

  decreaseProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const quandity = number - 1;
    const result = (Math.round(this.state.total - price));
    if (quandity === 0) {
      this.setStateTotal(result);
      this.removeProduct(target, element, price);
    } else {
      document.getElementById(element).innerText = quandity;
      this.setStateTotal(result);
    }
  }

  removeLocalStorage() {
    localStorage.removeItem('cartLocal');
  }

  render() {
    const { cart, total } = this.props;
    return total === 0 ? (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    ) : (
      <div data-testid="shopping-cart-empty-message">
        {cart.map((element) => (
          <div key={ element.id }>
            <img src={ element.thumbnail } alt={ element.title } />
            <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
            <button
              onClick={ (e) => this.removeProduct(e.target, element.id, element.price) }
            >
              [X]
            </button>
            <p id={ `${element.id}price` }>{element.price}</p>
            <button
              data-testid="product-increase-quantity"
              onClick={ (e) => this.sumProduct(e.target, element.id, element.price) }
            >
              +
            </button>
            <button
              data-testid="product-decrease-quantity"
              onClick={ (e) => this.decreaseProduct(e.target, element.id, element.price) }
            >
              -
            </button>
            <p id={ element.id } data-testid="shopping-cart-product-quantity">
              1<p className='bug'>23</p>
            </p>
          </div>
        ))}
        <div>{this.state.total}</div>
        <button type="button" onClick={ this.removeLocalStorage }>
          Deletar Todos
        </button>
      </div>
    );
  }
}
CreateCart.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};
