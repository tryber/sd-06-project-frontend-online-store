import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ProductDetails extends Component {
  render() {
    const { location: { state: { props: { title, thumbnail, price } } } } = this.props;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>
        <Link to="/CarrinhoCompras">
          <button type="button">Carrinho de Compras</button>
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      props: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
