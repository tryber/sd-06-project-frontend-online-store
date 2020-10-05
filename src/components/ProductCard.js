import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addItem, details } = this.props;
    addItem(details);
  }

  render() {
    const { title, thumbnail, price, details, addItem: add } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="foto do produto" />
        <p>{`Preço: R$ ${price}`}</p>
        <Link
          to={ {
            pathname: './product-details',
            product: details,
            addItem: add,
          } }
          data-testid="product-detail-link"
        >
          Detalhes do Produto
        </Link>
        <button
          type="button"
          className="add-to-cart-button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handleClick() }
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
  addItem: PropTypes.func,
};

ProductCard.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  details: {},
  addItem: () => 1,
};

export default ProductCard;
