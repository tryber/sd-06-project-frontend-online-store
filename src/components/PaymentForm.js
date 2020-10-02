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
      adress: '',
    };
  }

  render() {
    return (
      <div>
        Formulario de pagamento
      </div>
    );
  }
}

export default PaymentForm;
