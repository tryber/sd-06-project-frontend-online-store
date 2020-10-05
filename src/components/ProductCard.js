import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  constructor() {
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {
    const { title, setProductCart } = this.props;
    setProductCart(title);
  }

  render() {
    const { title, price, thumbnail } = this.props;
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
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  setProductCart: PropTypes.func.isRequired,
};

export default ProductCard;
