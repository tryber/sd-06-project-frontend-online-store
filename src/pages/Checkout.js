import React from 'react';
import PropTypes from 'prop-types';
import { PaymentForm } from '../components';

class Checkout extends React.Component {
  render() {
    const zero = 0;
    const { location: { state: { cartList } } } = this.props;
    console.log(cartList);
    return (
      <div>
        { Object.values(cartList).map((product) => (
          <div key={ product.id }>
            <p>
              { `${product.title} ${product.quantity * product.price}`}
            </p>
          </div>
        )) }
        <div>
          Total:
          { Object.values(cartList).reduce((prevValue, currValue) => (
            prevValue + (currValue.price * currValue.quantity)), zero)}
        </div>
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
