import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
function PaymentMethod() {
  return (
    <label htmlFor="payment">
      Método de pagamento
      <select>
        <option value="boleto">Boleto</option>
        <option value="credit-card-visa">Visa</option>
        <option value="credit-card-master">Master Card</option>
        <option value="credit-card-elo">Elo</option>
      </select>
    </label>
  );
}

export default PaymentMethod;
