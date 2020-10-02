import React from 'react';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <form>
        <label htmlFor="fullName">
          Nome completo
          <input type="text" data-testid="checkout-fullname" id="fullName" />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="text" data-testid="checkout-email" id="email" />
        </label>
        <label htmlFor="cpf">
          CPF
          <input type="number" data-testid="checkout-cpf" id="cpf" maxLength="11" />
        </label>
        <label htmlFor="phone">
          Telefone
          <input type="number" data-testid="checkout-phone" id="phone" maxLength="11" />
        </label>
        <label htmlFor="cep">
          CEP
          <input type="number" data-testid="checkout-cep" id="cep" maxLength="11" />
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" data-testid="checkout-address" id="address" maxLength="11" />
        </label>
      </form>
    );
  }
}

export default PaymentForm;
