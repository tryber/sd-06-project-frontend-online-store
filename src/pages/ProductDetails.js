import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartBtn from '../services/CartBtn';

class ProductDetails extends React.Component {
  constructor(props) {
    super();
    const product = props.location.state;
    this.state = { product };
  }

  renderButtons() {
    const { addToCart } = this.props;
    const { product } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  render() {
    const { location: { state: { title, thumbnail, attibutes } } } = this.props;
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
            {this.renderButtons()}
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
