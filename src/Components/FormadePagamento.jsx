import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FormadePagamento extends Component {
  render() {
    return (
      <fieldset>
        <legend> Método de pagamento</legend>
        <label htmlFor="boleto">
          Boleto
          <input type="radio" />
        </label>
        <label htmlFor="visa">
          Visa
          <input type="radio" />
        </label>
        <label htmlFor="master">
          Master Card
          <input type="radio" />
        </label>
        <label htmlFor="elo">
          Elo
          <input type="radio" />
        </label>
      </fieldset>
    );
  }
}

export default FormadePagamento;
