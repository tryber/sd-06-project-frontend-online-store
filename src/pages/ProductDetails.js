import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addItem from '../components/addItem';

class ProductDetails extends React.Component {
  
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title, thumbnail, price } = state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço:
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        <div>
          <Link onClick={addItem(title, price)} to="/">ADICIONAR AO CARRINHO</Link>
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
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
