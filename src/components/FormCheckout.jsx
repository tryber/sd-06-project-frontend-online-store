import React, { Component } from 'react';

class FormCheckout extends Component {
  render() {
    return (
      <div>
        <label>
          Nome Completo: 
          <input type="text" data-testid="checkout-fullname" />
        </label>
        <label>
          E-mail: 
          <input type="text" data-testid="checkout-email" />
        </label>
        <label>
          CPF: 
          <input type="text" data-testid="checkout-cpf" />
        </label>
        <label>
          Telefone: 
          <input type="text" data-testid="checkout-phone" />
        </label>
        <label>
          CEP: 
          <input type="text" data-testid="checkout-cep" />
        </label>
        <label>
          Endereço: 
          <input type="text" data-testid="checkout-address" />
        </label>
      </div>
    );
  }
}

export default FormCheckout;
