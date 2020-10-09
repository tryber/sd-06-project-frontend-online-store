import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cart } from '../services/CartSize';
import '../App.css';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.renderFreeShippingSign = this.renderFreeShippingSign.bind(this);
  }

  handleClick(item) {
    const { addItemToCart, product } = this.props;
    addItemToCart(product);
    cart.push(item);
  }

  renderFreeShippingSign() {
    return (
      <p
        className="free-shipping"
        data-testid="free-shipping"
      >
        FRETE GRÁTIS
      </p>
    );
  }

  render() {
    const { title, thumbnail, price, details } = this.props;
    const { available_quantity: availableQuantity, shipping } = details;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product" className="product-card">
        {(freeShipping) ? this.renderFreeShippingSign() : ''}
        <h3>{title}</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{`Preço: R$ ${price}`}</p>
        <p className="item-quantity">{`Quantidade disponível: ${availableQuantity}`}</p>
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
