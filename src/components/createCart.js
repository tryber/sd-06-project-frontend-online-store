import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateCart extends Component {
  constructor(props) {
    super(props);
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
    this.sumProduct = this.sumProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this)
  }

  componentDidMount() {

  }

  removeProduct(target) {
    const product = target.parentNode
    product.remove()
  }

  sumProduct(target,element) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number + 1
    document.getElementById(element).innerText=result
  }

  decreaseProduct(target,element) {
    const number = parseInt(target.parentNode.lastChild.innerText);
    const result = number - 1
    document.getElementById(element).innerText=result
  }

  removeLocalStorage() {
    localStorage.removeItem('cartLocal');
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          {cart.map((element) => (
            <div key={element.id}>
              <img src={element.thumbnail} alt={element.title} />
              <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
              <button onClick={(e) => this.removeProduct(e.target)}>[X]</button>
              <p>
                R$
                {element.price}
              </p>
              <button data-testid="product-increase-quantity" onClick={(e) => this.sumProduct(e.target,element.id)}> + </button>
              <button data-testid="product-decreate-quantity" onClick={(e) => this.decreaseProduct(e.target,element.id)}>
                {' '}
                -{' '}
              </button>
              <p id={element.id} data-testid="shopping-cart-product-quantity">
                1
              </p>
            </div>
          ))}
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
