import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shipping from './Shipping';

class ProductCard extends React.Component {
  render() {
    const { product, addToCart, cartList } = this.props;
    const { title, price, id, thumbnail } = product;


    return (
      <div className="productCard" data-testid="product">
        <img src={ thumbnail } className="product__img zoom" alt="product" />
        <div className="product__item product__title">{title}</div>
        <Shipping shipping={ product.shipping } />
        <div className="product__item product__price">
          {`${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRl' })}`}
        </div>

        <div className="buttons-container product__item">
          <Link to={ { pathname: `productDetails/${id}`, state: { product, cartList } } }>
            <button
              type="button"
              data-testid="product-detail-link"
              className="button__viewDetails button"
            >
              more Details
            </button>
          </Link>
          <button
            className="button__add_to_cart button"
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            add to cart
          </button>
        </div>

      </div>
    );
  }
}

ProductCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default ProductCard;
