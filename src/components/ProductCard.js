import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, condition) {
    const cart = [];
    const items = JSON.parse(localStorage.getItem('cart'));
    if (items) {
      cart.push(...items, item);
    } else {
      cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const { updateCart } = this.props;
    if (condition) {
      updateCart();
    }
  }

  render() {
    const { title, thumbnail, price, details, totalItems: items } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{`Preço: R$ ${price}`}</p>
        <Link
          to={ {
            pathname: './product-details',
            product: details,
            addFromDetails: this.handleClick,
            totalItems: items,
          } }
          data-testid="product-detail-link"
        >
          Detalhes do Produto
        </Link>
        <button
          type="button"
          className="add-to-cart-button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick(details, true) }
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
  updateCart: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  details: {},
};

export default ProductCard;
