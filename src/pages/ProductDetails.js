import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartBtn from '../services/CartBtn';

class ProductDetails extends React.Component {
  render() {
    const { product: { title, thumbnail, attibutes } } = this.state;
    return (
      <div>
        <div>
          <div>
            <Link data-testid="product-detail-add-to-cart" to="/ShoppingCart">
              Carrinho de compras
            </Link>
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
