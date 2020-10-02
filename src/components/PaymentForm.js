import React from 'react';

class PaymentForm extends React.Component {
  constructor(props) {

  }


  render() {
    return (
      <form>
        <label htmlFor="nome-completo">
          Nome completo
          <input type="text" data-testid="checkout-fullname" id="nome-completo" />
        </label>
      </form>
    );
  }
}

export default PaymentForm;
