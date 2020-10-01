import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { props } = this.props;
    const { title, price, id } = props;

    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
        <Link to={ `productDetails/${id}` }>
          <div data-testid="product-detail-link">View Details</div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ProductCard;
