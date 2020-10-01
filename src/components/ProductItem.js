import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  render() {
    const { product, query } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img alt="Product" src={ thumbnail } />
        <p>{price}</p>
        <Link to={ `productdetails/${query}/${id}` } data-testid="product-detail-link">
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
