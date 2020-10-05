import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cartItems: props.cartItems,
      addedItems: props.addedItems,
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fullname">
            Nome completo
            <input id="fullname" type="text" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="email">
            E-mail
            <input id="email" type="text" data-testid="checkout-email" />
          </label>
          <label htmlFor="cpf">
            CPF
            <input id="cpf" type="text" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="phone">
            Telefone
            <input id="phone" type="text" data-testid="checkout-phone" />
          </label>
          <label htmlFor="cep">
            CEP
            <input id="cep" type="text" data-testid="checkout-cep" />
          </label>
          <label htmlFor="address">
            Endereço
            <input id="address" type="text" data-testid="checkout-address" />
          </label>
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addedItems: PropTypes.shape().isRequired,
};

export default Checkout;
