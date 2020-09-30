import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { props } = this.props;
    const { title, price } = props;
    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
      </div>
    );
  }
}

ProductCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ProductCard;
