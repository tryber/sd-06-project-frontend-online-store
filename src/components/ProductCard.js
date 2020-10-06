import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  constructor() {
    super();

    this.addItemsToCart = this.addItemsToCart.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  addItemsToCart() {
    const { product, addItemCart } = this.props;
    const { title, thumbnail, price, id } = product;
    const { quantity } = this.state;
    this.setState({
      quantity,
    });
    addItemCart({ product: { title, thumbnail, price, id, quantity } });
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <section key={ title } data-testid="product" className="product-content">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/ProductDetails/${id}`, state: product } }
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
            className="add-button"
            data-testid="product-add-to-cart"
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
  addItemCart: PropTypes.string.isRequired,
};
export default ProductCard;
