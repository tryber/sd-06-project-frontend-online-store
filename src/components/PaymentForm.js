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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleSubmit() {
    Object.values(this.state).forEach((state) => {
      if (state === '') {
        document.getElementById(state).className = 'red';
      }
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="nome-completo">
          Nome completo
          <input type="text" data-testid="checkout-fullname" id="nome-completo" />
        </label>
        <label htmlFor="email">
          Nome completo
          <input type="text" data-testid="checkout-email" id="email" />
        </label>
      </form>
    );
  }
}

export default PaymentForm;
