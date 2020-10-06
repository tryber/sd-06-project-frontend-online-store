import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ItemCard.css';
import ShoppingCart from './ShoppingCart';

class ItemCard extends React.Component {
  render() {
    const { product } = this.props;
    const { shipping: { free_shipping: freeShipping } } = product;
    return (
      <div className="product-card" data-testid="product">
        <img src={ product.thumbnail } alt="foto do produto" className="product-image" />
        {freeShipping ? <div data-testid="free-shipping">FRETE GRÁTIS</div> : null }
        <h2>{ product.title }</h2>
        <p>{ product.price }</p>
        <Link data-testid="product-detail-link" to={ `/product-details/${product.id}` }>
          <button type="button" className="details-button">DETALHES</button>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => {
            ShoppingCart.addProduct(product);
          } }
          type="button"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ItemCard;
