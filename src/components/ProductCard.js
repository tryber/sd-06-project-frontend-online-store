import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cart } from '../services/CartSize';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const { addItemToCart, product } = this.props;
    addItemToCart(product);
    cart.push(item);
  }

  render() {
    const { title, thumbnail, price, details } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{`Preço: R$ ${price}`}</p>
        <Link
          to={ {
            pathname: './product-details',
            product: details,
          } }
          data-testid="product-detail-link"
        >
          Detalhes do Produto
        </Link>
        <button
          type="button"
          className="add-to-cart-button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(details) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  details: PropTypes.shape(),
  addItemToCart: PropTypes.func.isRequired,
  product: PropTypes.shape(),
};

ProductCard.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  details: {},
  product: {},
};

export default ProductCard;
