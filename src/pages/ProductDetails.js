import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import returnArrow from '../images/return-arrow.png';
import '../App.css';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="produto" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.shape(),
  product: PropTypes.shape(),
};

ProductDetails.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  location: {},
  product: {},
};

export default ProductDetails;
