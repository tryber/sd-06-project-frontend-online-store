import React from 'react';
import PropTypes from 'prop-types';

class Shipping extends React.Component {
  render() {
    const { shipping: { free_shipping: freeShipping } } = this.props;
    const x = 'product__item product__shipping';
    const y = 'free-shipping';


    return (
      freeShipping ? <div className={ x } data-testid={ y }>SHIPPING_GUARANTEED</div>
        : <div />
    );
  }
}

Shipping.propTypes = {
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Shipping;
