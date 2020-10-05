import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartBtn from '../services/CartBtn';
import Evaluations from '../components/Evaluations';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, attibutes, id } } } = this.props;
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
          <Evaluations productId={ id } />
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
