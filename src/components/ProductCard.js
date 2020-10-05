import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  constructor() {
    super();

    this.addItemsToCart = this.addItemsToCart.bind(this);
    this.state = {

    };
  }


  addItemsToCart() {
    const { product, addItemCart } = this.props;
    const { title, thumbnail, price, id } = product;
    addItemCart({product: { title, thumbnail, price, id }})
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <section key={ title } data-testid="product" className="product-content">
        <Link
          data-testid="product-detail-link"
          to={{ pathname: `/ProductDetails/${id}`, state: product }}
        >
          <div className="img-div">
            <img className="img" src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <div className="product-details-div">
          <p>{title}</p>
          <p className="price">{`R$ ${price}`}</p>
        </div>
        <div className="addToCart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.addItemsToCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </section>
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
