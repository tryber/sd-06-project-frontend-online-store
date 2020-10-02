import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateCart extends Component {
  constructor() {
    super();
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
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
            <div key={ element.id }>
              <img src={ element.thumbnail } alt={ element.title } />
              <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
              <p>
                R$
                {element.price}
              </p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={ this.removeLocalStorage }>
          Deletar todos
        </button>
      </div>
    );
  }
}
CreateCart.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};
