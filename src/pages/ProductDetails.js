import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props.location.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço: {price}
        </p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductDetails;
