import React, { Component } from 'react';

class InfoComprador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.updateState = this.updateState.bind(this);
    this.confirmBuy = this.confirmBuy.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  confirmBuy() {
    this.setState({
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  }

  render() {
    const { fullName, email, cep, address, phone, cpf } = this.state;
    return (
      <div>
        <label htmlFor="checkout-fullname">
          Nome completo:
          <input
            data-testid="checkout-fullname"
            type="text"
            name="fullName"
            value={ fullName }
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="checkout-email">
          Email:
          <input
            data-testid="checkout-email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="checkout-cpf">
          CPF:
          <input
            data-testid="checkout-cpf"
            type="text"
            value={ cpf }
            name="cpf"
            onChange={ this.updateState }
          />
          <br />
        </label>
        <label htmlFor="checkout-phone">
          Telefone:
          <input
            data-testid="checkout-phone"
            type="text"
            name="phone"
            value={ phone }
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="checkout-cep">
          CEP:
          <input
            data-testid="checkout-cep"
            type="text"
            value={ cep }
            name="cep"
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="checkout-address">
          Endereço:
          <input
            data-testid="checkout-address"
            type="text"
            name="address"
            value={ address }
            onChange={ this.updateState }
          />
        </label>
      </div>
    );
  }
}

export default InfoComprador;
