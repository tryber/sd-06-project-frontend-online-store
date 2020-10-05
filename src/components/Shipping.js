import React from 'react';
import PropTypes from 'prop-types';

class Shipping extends React.Component {
  render() {
    const { shipping: { free_shipping: freeShipping } } = this.props;


    return (
      freeShipping ? <div data-testid="free-shipping">SHIPPING_GUARANTEED</div> : <div />
    );
  }
}

Shipping.propTypes = {
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Shipping;
