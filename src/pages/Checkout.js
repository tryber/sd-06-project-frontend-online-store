import React from 'react';
import '../App.css';

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-form">
        <h3>Finalizar compra</h3>
        <label htmlFor="fullname">
          Nome completo:
          <input id="fullname" type="text" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="text" data-testid="checkout-email" />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input id="cpf" type="text" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input id="phone" type="text" data-testid="checkout-phone" />
        </label>
        <label htmlFor="cep">
          CEP:
          <input id="cep" type="text" data-testid="checkout-cep" />
        </label>
        <label htmlFor="adress">
          Endereço:
          <input id="adress" type="text" data-testid="checkout-address" />
        </label>
        <button type="button" className="checkout-button">Finalizar pedido</button>
      </div>
    );
  }
}

export default Checkout;
