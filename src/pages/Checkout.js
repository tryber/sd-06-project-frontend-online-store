import React from 'react';
import { PaymentForm } from '../components';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        Carrinho com os produtos.
        <PaymentForm />
      </div>
    );
  }
}

export default Checkout;
