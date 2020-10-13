import React from 'react';
import PropTypes from 'prop-types';
import PaymentList from '../components/ShoppingList';

class Payment extends React.Component {
  render() {
    const { addToCart, subtractFromCart, cartProducts } = this.props;
    return (
      <div>
        <PaymentList
          addToCart={ addToCart }
          subtractFromCart={ subtractFromCart }
          cartProducts={ cartProducts }
        />
        <form>
          <label htmlFor="fullname">
            Nome completo:
            <input type="text" data-testid="checkout-fullname" id="fullname" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" data-testid="checkout-email" id="email" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="text" data-testid="checkout-cpf" id="cpf" />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input type="text" data-testid="checkout-phone" id="phone" />
          </label>
          <label htmlFor="cep">
            CEP:
            <input type="text" data-testid="checkout-cep" id="cep" />
          </label>
          <label htmlFor="address">
            Endereço:
            <input type="text" data-testid="checkout-address" id="address" />
          </label>
        </form>
      </div>
    );
  }
}

Payment.propTypes = {
  addToCart: PropTypes.func.isRequired,
  subtractFromCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Payment;
