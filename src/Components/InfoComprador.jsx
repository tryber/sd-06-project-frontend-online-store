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
  }
Você pode 
  updateState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderFullName() {
    const { fullName } = this.state;
    return (
      <div>
        <label>
          Nome completo:
        <input
            data-testid="checkout-fullname"
            type="text"
            name="fullName"
            value={ fullName }
            onChange={ this.updateState }
          />
        </label>
      <label>
        Email:
      <input
        data-testid="checkout-email"
        type="email"
        name="email"
        value={ email }
        onChange={ this.updateState }
        />
      </label>
      <label>CPF:</label>
      <input
        data-testid="checkout-cpf"
        type="text"
        value={ cpf }
        name="cpf"
        onChange={ this.updateState }
      />
      <label>Telefone:</label>
      <input
        data-testid="checkout-phone"
        type="text"
        name="phone"
        value={ phone }
        onChange={ this.updateState }
      />
      <label>CEP:</label>
      <input
        data-testid="checkout-cep"
        type="text"
        value={ cep }
        name="cep"
        onChange={ this.updateState }
      />
      <label>Endereço:</label>
      <input
        data-testid="checkout-address"
        type="text"
        name="address"
        value={ address }
        onChange={ this.updateState }
      />
    </div>
  )
}

export default InfoComprador;
