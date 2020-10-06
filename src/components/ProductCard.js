import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  constructor() {
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {
    const { title, setProductCart, id, thumbnail, price } = this.props;
    setProductCart(title, id, price, thumbnail);
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img alt="Imagem do produto" src={ thumbnail } />
        <p>{ price }</p>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.handleAddClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <Link
          to={ { pathname: `/ProductDetails/${id}`, state: { props: product } } }
          data-testid="product-detail-link"

        >
          <button type="button">Detalhes do produto</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  setProductCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
