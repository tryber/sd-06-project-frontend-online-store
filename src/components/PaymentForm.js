import React from 'react';
import { Redirect } from 'react-router-dom';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValidated: false,
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleSubmit() {
    const estado = { ...this.state };
    const empty = 0;
    Object.keys(this.state).forEach((state) => {
      if (estado[state] === '') {
        document.getElementById(state).className = 'red';
      } else if (state !== 'formValidated') {
        document.getElementById(state).className = '';
      }
    });
    const invalidInputs = document.getElementsByClassName('red');
    if (invalidInputs.length === empty) {
      this.setState({ formValidated: true });
    }
  }

  render() {
    const { formValidated } = this.state;

    if (formValidated) {
      const cartList = {};
      return (<Redirect
        to={ { pathname: '/', state: { cartList } } }
      />);
    }

    return (
      <form className="checkout-form">
        <label htmlFor="fullName">
          Nome completo
          <input
            type="text"
            data-testid="checkout-fullname"
            id="fullName"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            data-testid="checkout-email"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cpf">
          CPF
          <input
            type="number"
            data-testid="checkout-cpf"
            id="cpf"
            maxLength="11"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="phone">
          Telefone
          <input
            type="number"
            data-testid="checkout-phone"
            id="phone"
            maxLength="11"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cep">
          CEP
          <input
            type="number"
            data-testid="checkout-cep"
            id="cep"
            maxLength="11"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="address">
          Endereço
          <textarea
            data-testid="checkout-address"
            id="address"
            maxLength="11"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleSubmit }>Finalizar compra</button>
      </form>
    );
  }
}

export default PaymentForm;
