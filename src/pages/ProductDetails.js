import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.renderDetails = this.renderDetails.bind(this);
  }

  renderDetails() {
    const { location: { state: { title, thumbnail, price } } } = this.props;

    return (
      <div>
        <Link to="/">voltar</Link>
        <div data-testid="product-detail-name">{title}</div>
        <div>{price}</div>
        <img src={ thumbnail } alt="product" />
      </div>
    );
  }

  render() {
    return this.renderDetails();
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
