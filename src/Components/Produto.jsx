/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produto extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.addToCart(this.props.produto)
  }

  render() {
    const { produto } = this.props;
    const { title, price, thumbnail } = produto;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <Link data-testid="product-detail-link" to={ {
          pathname: "/DetalhesDoProduto",
          state: {
            produto: this.props.produto,
          }
        } } >
          <img src={ thumbnail } alt="foto" />
        </Link>
        <p>{ price }</p>
        <button data-testid="product-add-to-cart" onClick={ this.onClick }>Adicionar ao Carrinho</button>

      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Produto;
