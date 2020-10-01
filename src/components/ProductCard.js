import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h1>{product.title}</h1>
        <img src={ product.thumbnail } alt="Foto do produto" />
        <p>R$ {product.price}</p>
        <Link
          to={ { pathname: `/ProductDetails/${product.id}`, state: product } }
          data-testid="product-detail-link"
        >
          Detalhes do produto
        </Link>
        <br></br>
        <button data-testid="product-detail-add-to-cart" onClick={console.log("ADD NO CARRINHO")}>Adicionar ao Carrinho</button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
