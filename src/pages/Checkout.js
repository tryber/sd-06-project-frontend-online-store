import React from 'react';
import PropTypes from 'prop-types';
import { PaymentForm } from '../components';

class Checkout extends React.Component {
  render() {
    const { location: { state: { cartList } } } = this.props;
    console.log(cartList);
    return (
      <div>
        Carrinho com os produtos.
        <PaymentForm />
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};
