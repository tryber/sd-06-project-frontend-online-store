import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, attibutes } } } = this.props;
    return (
      <div>
        <div>
          <div>
            <h1 data-testid="product-detail-name">{title}</h1>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <p>{ attibutes }</p>
          </div>
        </div>
        <div>
          <CartBtn />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attibutes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
