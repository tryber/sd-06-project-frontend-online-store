import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carrinho from '../imgs/carrinho.png';
import ProductRating from '../components/ProductRating';


class ProductDetails extends React.Component {
  render() {
    const { location, onClick } = this.props;
    const { state } = location;
    const { title, thumbnail, price } = state[0];

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço:
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        <form>
          <label htmlFor="number">
            Quantidade:
            <input type="number" name="number" onChange={ this.getQuantity } />
          </label>
        </form>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ onClick }
          >
            ADICIONAR AO CARRINHO
          </button>
          <Link
            data-testid="shopping-cart-button"
            to={ { pathname: '/shopping-cart', state: state[1] } }
          >
            <img src={ Carrinho } alt="Carrinho" />
          </Link>
          <ProductRating />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  onClick: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
